import { UserRepositoryInMemory } from '../repositories/implementations/in-memory/UserRepositoryInMemory';
import { UserService } from '../services/usersService/UserService';
import { AppError } from '../errors/AppError';

let userRepository: UserRepositoryInMemory
let usersService: UserService

describe("User - Gets Tests", () => {
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        usersService = new UserService(userRepository)
    })

    it("Obter Registro com email corretamente", async () => {
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

        const userSearched = await usersService.getByEmail("teste@teste.com")

        expect(userSearched).toHaveProperty('email', 'teste@teste.com')
    })

    it("Nao Deve Retornar Registro com erro 'Fill all fields'", async () => {
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

        await expect(usersService.getByEmail("")).rejects.toEqual(new AppError('Fill all fields'))
    })

    it("Listar Todos os Usuarios Corretamente", async () => {
        const userOne = {
            email: "teste1@teste.com",
            password: "123456-1",
            confirmPassword: "123456-1"
        }

        const userTwo = {
            email: "teste2@teste.com",
            password: "123456-2",
            confirmPassword: "123456-2"
        }

        await usersService.firstRegister({
            email: userOne.email,
            password: userOne.password,
            confirmPassword: userOne.confirmPassword
        })

        await usersService.firstRegister({
            email: userTwo.email,
            password: userTwo.password,
            confirmPassword: userTwo.confirmPassword
        })

        const usersListed = await usersService.list()

        expect(usersListed.length).toBe(2)
    })
})