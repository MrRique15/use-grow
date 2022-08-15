import { UserRepositoryInMemory } from '../repositories/implementations/in-memory/UserRepositoryInMemory';
import { UserService } from '../services/usersService/UserService';
import { AppError } from '../errors/AppError';

let userRepository: UserRepositoryInMemory
let usersService: UserService

describe("User - Login Tests", () => {
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        usersService = new UserService(userRepository)
    })

    it("Realizar Login de Usuario Corretamente", async () => {
        const user = {
            email: "teste@teste.com",
            password: "123456",
            confirmPassword: "123456"
        }

        await usersService.firstRegister({
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword
        })

        await usersService.fullRegister({
            name: "Teste",
            surename: "Teste",
            email: user.email,
            age: 18,
            dream: "Conquest the World",
            authCode: "555555"
        })

        const userLogged = await usersService.login({
            email: user.email,
            password: user.password
        })

        expect(userLogged).toHaveProperty('email', 'teste@teste.com')
    })

    it("Nao Deve Realizar Login com erro 'Fill all fields'", async () => {
        const user = {
            email: "teste@teste.com",
            password: "123456",
            confirmPassword: "123456"
        }

        await usersService.firstRegister({
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword
        })

        await usersService.fullRegister({
            name: "Teste",
            surename: "Teste",
            email: user.email,
            age: 18,
            dream: "Conquest the World",
            authCode: "555555"
        })

        await expect(usersService.login({
            email: "", 
            password: ""
        })).rejects.toEqual(new AppError('Fill all fields'))
    })

    it("Nao Deve Realizar Login com erro 'Password is incorrect'", async () => {
        const user = {
            email: "teste@teste.com",
            password: "123456",
            confirmPassword: "123456"
        }

        await usersService.firstRegister({
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword
        })

        await usersService.fullRegister({
            name: "Teste",
            surename: "Teste",
            email: user.email,
            age: 18,
            dream: "Conquest the World",
            authCode: "555555"
        })

        await expect(usersService.login({
            email: user.email, 
            password: "5555"
        })).rejects.toEqual(new AppError('Password is incorrect'))
    })

    it("Nao Deve Realizar Login com erro 'User not found'", async () => {
        const user = {
            email: "teste@teste.com",
            password: "123456"
        }

        await usersService.firstRegister({
            email: user.email,
            password: user.password,
            confirmPassword: user.password
        })

        await usersService.fullRegister({
            name: "Teste",
            surename: "Teste",
            email: user.email,
            age: 18,
            dream: "Conquest the World",
            authCode: "555555"
        })

        await expect(usersService.login({
            email: "naoexiste@teste.com", 
            password: "123456"
        })).rejects.toEqual(new AppError('User not found'))
    })

    it("Nao Deve Realizar Login com erro 'Complete your Registration'", async () => {
        const user = {
            email: "teste@teste.com",
            password: "123456"
        }

        await usersService.firstRegister({
            email: user.email,
            password: user.password,
            confirmPassword: user.password
        })

        await expect(usersService.login({
            email: "teste@teste.com",
            password: "123456"
        })).rejects.toEqual(new AppError('Complete your Registration'))
    })
})