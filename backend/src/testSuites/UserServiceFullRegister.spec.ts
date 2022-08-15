import { UserRepositoryInMemory } from '../repositories/implementations/in-memory/UserRepositoryInMemory';
import { UserService } from '../services/usersService/UserService';
import { AppError } from '../errors/AppError';

let userRepository: UserRepositoryInMemory
let usersService: UserService

describe("User - Full Register Tests", () => {
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        usersService = new UserService(userRepository)
    })

    it("Deve Finalizar a Etapa de Registro de um Usuario Corretamente", async () => {
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

        const userRegistered = await usersService.fullRegister({
            name: "Teste",
            surename: "Teste",
            email: user.email,
            age: 18,
            dream: "Conquest the World",
            authCode: "555555"
        })

        expect(userRegistered).toHaveProperty('name', 'Teste')
        expect(userRegistered).toHaveProperty('surename', 'Teste')
        expect(userRegistered).toHaveProperty('email', user.email)
        expect(userRegistered).toHaveProperty('password', user.password)
        expect(userRegistered).toHaveProperty('age', 18)
        expect(userRegistered).toHaveProperty('dream', 'Conquest the World')
    })

    it("Nao Deve Finalizar o Registro com erro 'Some information is missing or incorrect'", async () => {
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

        await expect(usersService.fullRegister({
            name: "",
            surename: "",
            email: user.email,
            age: 18,
            dream: "Conquest the World",
            authCode: "555555"
        })).rejects.toEqual(new AppError('Some information is missing or incorrect'))
    })

    it("Nao Deve Finalizar o Registro com erro 'User not found'", async () => {
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

        await expect(usersService.fullRegister({
            name: "Teste",
            surename: "Teste",
            email: "naoExiste@teste.com",
            age: 18,
            dream: "Conquest the World",
            authCode: "555555"
        })).rejects.toEqual(new AppError('User not found'))
    })

    it("Nao Deve Finalizar o Registro com erro 'User is already registered'", async () => {
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

        await expect(usersService.fullRegister({
            name: "Teste",
            surename: "Teste",
            email: user.email,
            age: 18,
            dream: "Conquest the World",
            authCode: "555555"
        })).rejects.toEqual(new AppError('User is already registered'))
    })

    it("Nao Deve Finalizar o Registro com erro 'Auth code is incorrect'", async () => {
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

        await expect(usersService.fullRegister({
            name: "Teste",
            surename: "Teste",
            email: user.email,
            age: 18,
            dream: "Conquest the World",
            authCode: "222222"
        })).rejects.toEqual(new AppError('Auth code is incorrect'))
    })
})