import User, { UserAttributes } from '../../model/User'
import { IUsersRepository, IFullRegisterDTO, IFirstRegisterDTO, IUpdateDTO, IDeleteUser } from '../IUsersRepository'
import bcrypt from 'bcryptjs'
import { MailTrapMailProvider } from '../../services/mailerService/implementations/MailTrapMailProvider'
//----------------------------------------------------------------------------------
class UsersRepository implements IUsersRepository {
    private mailSender = new MailTrapMailProvider()

    constructor () {}

    async checkExistingUser(email: string): Promise<Boolean> {
        const user = await User.findOne({ email:email })
        return user != null
    }

    async getUserByEmail(email: string): Promise<UserAttributes> {
        const user = await User.findOne({ email:email })
        return user
    }
    
    async fullRegisterUser({ name,surename,email,age,dream }: IFullRegisterDTO): Promise<UserAttributes> {
        this.mailSender.sendMail({
            to: {
                name: name + " " + surename,
                email: email
            },
            from: {
                name: 'Equipe Use&Grow',
                email: 'use&grow@hotmail.com'
            },
            subject: 'Finalização de Cadastro',
            body: `
                <p>Olá <b>${name} ${surename}</b><br/>
                Seja bem-vindo ao Use&Grow!<br/>
                Com sua conta autorizada, agora você pode navegar e aproveitar todas as nossas funcionalidades.<br/>
                Desenvolvemos cada parte com muito cuidado em entregar o melhor aos nossos clientes.<br/>
                Esperamos que você goste do Use&Grow APP e te ajude com as tarefas cotidianas!<br/><br/>
                Atenciosamente,<br/>
                Equipe <b>Use&Grow</b></p>
            `
        })

        const finalUser = await User.findOneAndUpdate(
            { email:email },
            {
                name: name,
                surename: surename,
                age: age,
                dream: dream,
                updated_at: new Date(),
                confirmation_token: null
            },
            { new: true }
        )

        return finalUser
    }

    async firstRegisterUser({ email,password,confirmToken }: IFirstRegisterDTO): Promise<UserAttributes> {
        const hashPass = await bcrypt.hash(password, 10)
        const user: UserAttributes = {
            name: "notCreated",
            surename: "notCreated",
            email: email,
            password: hashPass,
            age: 0,
            dream: "notCreated",
            created_at: new Date(),
            updated_at: null,
            confirmation_token: confirmToken
        }
        this.mailSender.sendMail({
            to: {
                name: "Caro Usuário",
                email: email
            },
            from: {
                name: 'Equipe Use&Grow',
                email: 'use&grow@hotmail.com'
            },
            subject: 'Confirmação de Cadastro',
            body: `
                <p>Para confirmar o cadastro de sua conta, utilize o código abaixo!<br/><br/>
                <b>${confirmToken}</b><br/><br/>
                Basta voltar para a tela de login e realizar o login com email e senha cadastrados.<br/>
                Após isso, algumas informações serão solicitadas junto do código de confirmação.<br/><br/>
                Atenciosamente,<br/>
                Equipe <b>Use&Grow</b></p>
            `
        })
        return await User.create(user)
    }

    async listAllUsers(): Promise<UserAttributes[]> {
        return await User.find({})
    }

    async updateUser({ name, surename, email, password, age, dream }: IUpdateDTO): Promise<UserAttributes> {
        const hashPass = await bcrypt.hash(password, 10)
        this.mailSender.sendMail({
            to: {
                name: name + " " + surename,
                email: email
            },
            from: {
                name: 'Equipe Use&Grow',
                email: 'use&grow@hotmail.com'
            },
            subject: 'Altualização de Perfil',
            body: `
                <p>Olá ${name} ${surename}<br/>
                Notamos uma alteração em seus dados pessoais.<br/>
                Por isso, viemos te contatar sobre essa alteração.<br/>
                Caso seja você mesmo quem alterou seus dados, ignore este e-mail.<br/>
                Porém, caso não reconheça essa alteração, recomendamos que altere sua senha e mantenha a segurança de sua conta.<br/><br/>
                Atenciosamente,<br/>
                Equipe <b>Use&Grow</b></p>
            `
        })
        return await User.findOneAndUpdate(
            { email:email },
            {
                name: name,
                surename: surename,
                password: hashPass,
                age: age,
                dream: dream,
                updated_at: new Date(),
            },
            { new: true }
        )
    }

    async deleteUser({ email, password }: IDeleteUser): Promise<UserAttributes> {
        this.mailSender.sendMail({
            to: {
                name: 'Caro Usuário',
                email: email
            },
            from: {
                name: 'Equipe Use&Grow',
                email: 'use&grow@hotmail.com'
            },
            subject: 'Exclusão de Conta',
            body: `
                <p>Olá,<br/>
                Notamos uma que excluiu sua conta em nosso aplicativo.<br/>
                Ficamos muito tristes em saber que não irá mais fazer parte da família Use&Grow.<br/>
                Aguardamos anciosamente sua volta, estaremos sempre de portas abertas para você.<br/>
                Caso não reconheça a exclusão da conta, entre em contato com o suporte Use&Grow.<br/><br/>
                Atenciosamente,<br/>
                Equipe <b>Use&Grow</b></p>
            `
        })
        return await User.findOneAndDelete({ email:email })
    }

    async verifyPassword(passwordInjected: string, passwordSaved: string): Promise<Boolean> {
        return bcrypt.compareSync(passwordInjected, passwordSaved)
    }
}

export { UsersRepository }