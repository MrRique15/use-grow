import { UserAttributes } from '../model/User'

interface IFullRegisterDTO {
    name: string
    surename: string
    email: string
    age: number
    dream: string
}

interface IFirstRegisterDTO {
    email: string
    password: string
    confirmToken: number
}

interface IUpdateDTO {
    name: string
    surename: string
    email: string
    password: string
    age: number
    dream: string
}

interface IDeleteUser {
    email: string
    password: string
}

interface IUsersRepository {
    getUserByEmail(email: string): Promise<UserAttributes>
    fullRegisterUser({ name,surename,email,age,dream }: IFullRegisterDTO): Promise<UserAttributes>
    firstRegisterUser({ email,password }: IFirstRegisterDTO): Promise<UserAttributes>
    listAllUsers(): Promise<UserAttributes[]>
    updateUser({ name, surename, email, password, age, dream }: IUpdateDTO): Promise<UserAttributes>
    deleteUser({ email, password }: IDeleteUser): Promise<UserAttributes>
    checkExistingUser(email: string): Promise<Boolean>
    verifyPassword(passwordInjected: string, passwordSaved: string): Promise<Boolean>
}


export { IUsersRepository, IFullRegisterDTO, IFirstRegisterDTO, IUpdateDTO, IDeleteUser }