import { UserRepositoryInMemory } from '../repositories/implementations/in-memory/UserRepositoryInMemory';
import { UserService } from '../services/usersService/UserService';
import { AppError } from '../errors/AppError';

let userRepository: UserRepositoryInMemory
let usersService: UserService

describe("User - Delete Tests", () => {
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        usersService = new UserService(userRepository)
    })

    it("Deve Excluir um Usuario Corretamente", async () => {
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

        const userDeleted = await usersService.delete({
            email: user.email,
            password: user.password
        })

        const listUsers = await usersService.list()

        expect(userDeleted).toHaveProperty('name', "Teste")
        expect(userDeleted).toHaveProperty('surename', "Teste")
        expect(userDeleted).toHaveProperty('email', user.email)
        expect(userDeleted).toHaveProperty('password', user.password)
        expect(listUsers.length).toBe(0)
    })

    it("Nao Deve Excluir um Usuario com erro 'Fill all fields'", async () => {
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

        await expect(usersService.delete({
            email: "",
            password: user.password
        })).rejects.toEqual(new AppError('Fill all fields'))
    })

    it("Nao Deve Excluir um Usuario com erro 'User not found'", async () => {
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

        await expect(usersService.delete({
            email: "naoExiste@teste.com",
            password: user.password
        })).rejects.toEqual(new AppError('User not found'))
    })

    it("Nao Deve Excluir um Usuario com erro 'Password is incorrect'", async () => {
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

        await expect(usersService.delete({
            email: user.email,
            password: "5555"
        })).rejects.toEqual(new AppError('Password is incorrect'))
    })
})