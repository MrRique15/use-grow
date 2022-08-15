import { Request, Response } from "express"
import { UserService } from "../services/usersService/UserService"
import { UsersRepository } from '../repositories/implementations/UsersRepository'

const usersRepository = new UsersRepository()
const userService = new UserService(usersRepository)

class UsersController {
    async list(req: Request, res: Response): Promise<Response> {
        const listUsers = await userService.list()

        return res.status(200).json(listUsers)
    }

    async getByEmail(req: Request, res: Response): Promise<Response> {
        const { email } = req.query

        const user = await userService.getByEmail(email as string)

        return res.json(user)
    }

    async firstRegister(req: Request, res: Response): Promise<Response> {
        const { email, password, confirmPassword } = req.body

        const registeredUser = await userService.firstRegister({ email, password, confirmPassword })

        return res.status(201)
        .json({
            message: 'User created sucessfully',
            user: registeredUser
        })
    }

    async delete(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body

        const deletedUser = await userService.delete({ email, password })

        return res.status(200)
        .json({
            message: "User deleted successfully",
            user: deletedUser
        })
    }

    async update(req: Request, res: Response): Promise<Response> {
        const { name, surename, email, password, age, dream } = req.body

        const updatedUser = await userService.update({ name, surename, email, password, age, dream })

        return res.status(200)
        .json({
            message: 'User updated', 
            user: updatedUser
        })   
    }

    async login(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body

        const loggedUser = await userService.login({ email, password })

        return res.status(200).json({
            message: 'User logged in',
            user: loggedUser
        })
    }

    async fullRegister(req: Request, res: Response): Promise<Response> {
        const { name, surename, email, age, dream, authCode } = req.body

        const registeredUser = await userService.fullRegister({ name, surename, email, age, dream, authCode })

        return res.status(200)
        .json({
            message: 'User finally registered',
            user: registeredUser
        })   
    }
}

export default UsersController