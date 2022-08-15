import { AppError } from '../../errors/AppError'
import { UserAttributes } from '../../model/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { CodeGenerator } from '../../repositories/implementations/CodeGenerator'
//----------------------------------------------------------------------------------
interface IFullRequest {
    name: string
    surename: string
    email: string
    password?: string
    age: number
    dream: string
}
interface IFullRequestRegister {
    name: string
    surename: string
    email: string
    age: number
    dream: string
    authCode: string
}
interface IDeleteUser {
    email: string
    password: string
}
interface IFirstRegister{
    email: string
    password: string
    confirmPassword: string
}
interface ILogin {
    email: string
    password: string
}
//----------------------------------------------------------------------------------
class UserService {
    private codeGenerator = new CodeGenerator()
    constructor(private usersRepository: IUsersRepository) {}

    async firstRegister({ email, password, confirmPassword }: IFirstRegister): Promise<UserAttributes> {
        if (!email || !password || !confirmPassword) {
            throw new AppError('Fill all fields')
        }

        const existingUser = await this.usersRepository.checkExistingUser(email)

        if (existingUser) {
            throw new AppError('User already exists')
        }else if(password != confirmPassword){
            throw new AppError('Passwords do not match')
        }else if(password.length < 6){
            throw new AppError('Password must be at least 6 characters')
        }else if(!email.includes('@')){
            throw new AppError('Use a valid email')
        }
        const confirmToken = this.codeGenerator.generateCode()
        return await this.usersRepository.firstRegisterUser({ email, password, confirmToken })
    }

    async fullRegister({ name, surename, email, age, dream, authCode }: IFullRequestRegister): Promise<UserAttributes> {
        if (!name || !surename || !email || !age || !dream || !authCode || age < 0) {
            throw new AppError('Some information is missing or incorrect')
        }

        const existingUser = await this.usersRepository.getUserByEmail(email)
        
        if (!existingUser) {
            throw new AppError('User not found')
        }else{
            if(existingUser.age > 0){
                throw new AppError('User is already registered')
            }else if(existingUser.confirmation_token != parseInt(authCode)){
                throw new AppError('Auth code is incorrect')
            }
        }

        return await this.usersRepository.fullRegisterUser({ name, surename, email, age, dream })
    }

    async getByEmail(email: string): Promise<UserAttributes> {
        if (!email) {
            throw new AppError('Fill all fields')
        }

        return await this.usersRepository.getUserByEmail(email)
    }

    async list(): Promise<UserAttributes[]> {
        return await this.usersRepository.listAllUsers()
    }

    async update({ name, surename, email, password, age, dream }: IFullRequest): Promise<UserAttributes> {
        if (!name || !surename || !email || !password || !age || !dream) {
            throw new AppError('Some information is missing')
        }

        const existingUser = await this.usersRepository.checkExistingUser(email)

        if (!existingUser) {
            throw new AppError('User not found')
        }

        return await this.usersRepository.updateUser({ name, surename, email, password, age, dream })
    }

    async delete({ email, password }: IDeleteUser): Promise<UserAttributes> {
        if (!email || !password) {
            throw new AppError('Fill all fields')
        }

        const existingUser = await this.usersRepository.getUserByEmail(email)

        if (!existingUser) {
            throw new AppError('User not found')
        }else{
            const passValidation = await this.usersRepository.verifyPassword(password, existingUser.password)
            if(!passValidation){
                throw new AppError('Password is incorrect')
            }
        }

        return await this.usersRepository.deleteUser({ email, password })
    }

    async login({ email, password }: ILogin): Promise<UserAttributes> {
        if (!email || !password) {
            throw new AppError('Fill all fields')
        }

        const existingUser = await this.usersRepository.getUserByEmail(email)

        if (!existingUser) {
            throw new AppError('User not found')
        }else{
            const passValidation = await this.usersRepository.verifyPassword(password, existingUser.password)
            if(!passValidation){
                throw new AppError('Password is incorrect')
            }else if(existingUser.age < 1){
                throw new AppError('Complete your Registration')
            }
        }

        return existingUser
    }
}
//----------------------------------------------------------------------------------
export { UserService }