import { UserRepositoryInMemory } from '../repositories/implementations/in-memory/UserRepositoryInMemory';
import { UserService } from '../services/usersService/UserService';
import { AppError } from '../errors/AppError';

let userRepository: UserRepositoryInMemory
let usersService: UserService

describe("User - First Register Tests", () => {
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        usersService = new UserService(userRepository)
    })

    it("Criar Primeiro registro de usuario corretamente", async () => {
        const user = {
            email: "teste@teste.com",
            password: "123456",
            confirmPassword: "123456"
        }

        const userRegistered = await usersService.firstRegister({
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword
        })

        expect(userRegistered).toHaveProperty('name', 'notCreated')
        expect(userRegistered).toHaveProperty('surename', 'notCreated')
        expect(userRegistered).toHaveProperty('email', 'teste@teste.com')
        expect(userRegistered).toHaveProperty('password', '123456')
    })

    it("Nao Deve Criar Primeiro registro com erro 'Fill all fields'", async () => {
        const user = {
            email: "teste@teste.com",
            password: "",
            confirmPassword: "123456"
        }

        await expect(usersService.firstRegister({
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword
        })).rejects.toEqual(new AppError('Fill all fields'))
    })

    it("Nao Deve Criar Primeiro registro com erro 'User already exists'", async () => {
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

        await expect(usersService.firstRegister({
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword
        })).rejects.toEqual(new AppError('User already exists'))
    })

    it("Nao Deve Criar Primeiro registro com erro 'Passwords do not match'", async () => {
        const user = {
            email: "teste@teste.com",
            password: "123456",
            confirmPassword: "123457"
        }

        await expect(usersService.firstRegister({
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword
        })).rejects.toEqual(new AppError('Passwords do not match'))
    })

    it("Nao Deve Criar Primeiro registro com erro 'Password must be at least 6 characters'", async () => {
        const user = {
            email: "teste@teste.com",
            password: "123",
            confirmPassword: "123"
        }

        await expect(usersService.firstRegister({
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword
        })).rejects.toEqual(new AppError('Password must be at least 6 characters'))
    })

    it("Nao Deve Criar Primeiro registro com erro 'Use a valid email'", async () => {
        const user = {
            email: "teste.teste.com",
            password: "123456",
            confirmPassword: "123456"
        }

        await expect(usersService.firstRegister({
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword
        })).rejects.toEqual(new AppError('Use a valid email'))
    })
})