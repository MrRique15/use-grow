import { UserRepositoryInMemory } from '../repositories/implementations/in-memory/UserRepositoryInMemory';
import { UserService } from '../services/usersService/UserService';
import { AppError } from '../errors/AppError';

let userRepository: UserRepositoryInMemory
let usersService: UserService

describe("User - Update Tests", () => {
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        usersService = new UserService(userRepository)
    })

    it("Deve Alterar as Informacoes de Um Usuario Corretamente'", async () => {
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

        const userUpdated = await usersService.update({
            name: "Teste",
            surename: "TesteUpdated",
            email: user.email,
            password: user.password,
            age: 52,
            dream: "Conquest the World"
        })

        expect(userUpdated).toHaveProperty('surename', 'TesteUpdated')
        expect(userUpdated).toHaveProperty('age', 52)
    })

    it("Nao Deve Alterar as Informacoes de Um Usuario com erro 'Some information is missing'", async () => {
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

        await expect(usersService.update({
            name: "",
            surename: "TesteUpdated",
            email: user.email,
            password: user.password,
            age: 52,
            dream: "Conquest the World"
        })).rejects.toEqual(new AppError('Some information is missing'))
    })

    it("Nao Deve Alterar as Informacoes de Um Usuario com erro 'User not found'", async () => {
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

        await expect(usersService.update({
            name: "Teste",
            surename: "TesteUpdated",
            email: "naoExiste@teste.com",
            password: user.password,
            age: 52,
            dream: "Conquest the World"
        })).rejects.toEqual(new AppError('User not found'))
    })
})