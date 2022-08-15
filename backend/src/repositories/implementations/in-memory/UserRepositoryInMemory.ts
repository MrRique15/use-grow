//File used to create and run tests using memory, preventing data base access during tests

import { UserAttributes } from "../../../model/User";
import { IDeleteUser, IFirstRegisterDTO, IFullRegisterDTO, IUpdateDTO, IUsersRepository } from "../../IUsersRepository";

class UserRepositoryInMemory implements IUsersRepository {
    users: UserAttributes[] = []

    async getUserByEmail(email: string): Promise<UserAttributes> {
        return this.users.find(user => user.email === email)
    }

    async fullRegisterUser({ name, surename, email, age, dream }: IFullRegisterDTO): Promise<UserAttributes> {
        const user = this.users.find((user) => user.email === email)
        
        Object.assign(user, {
            name,
            surename,
            email,
            age,
            dream,
            confirmation_token: null,
        })

        return user
    }

    async firstRegisterUser({ email, password }: IFirstRegisterDTO): Promise<UserAttributes> {
        const user = new UserAttributes()

        Object.assign(user, {
            name: "notCreated",
            surename: "notCreated",
            email,
            password,
            age: 0,
            dream: "notCreated",
            created_at: new Date(),
            confirmation_token: 555555,
        })

        this.users.push(user)

        return user
    }

    async listAllUsers(): Promise<UserAttributes[]> {
        return this.users
    }

    async updateUser({ name, surename, email, password, age, dream }: IUpdateDTO): Promise<UserAttributes> {
        const user = this.users.find((user) => user.email === email)
        
        Object.assign(user, {
            name,
            surename,
            email,
            password,
            age,
            dream,
            confirmation_token: null,
        })
        
        return user
    }

    async deleteUser({ email, password }: IDeleteUser): Promise<UserAttributes> {
        const user = this.users.find((user) => user.email === email)

        this.users.splice(this.users.indexOf(user), 1)
        
        return user
    }

    async checkExistingUser(email: string): Promise<Boolean> {
        return this.users.find((user) => user.email === email) != null
    }

    async verifyPassword(passwordInjected: string, passwordSaved: string): Promise<Boolean> {
        return passwordInjected === passwordSaved
    }
}

export { UserRepositoryInMemory }