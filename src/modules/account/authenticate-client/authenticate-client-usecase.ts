import { compare, hash } from 'bcrypt';
import { prisma } from '../../../batabase/prisma-client';
import { sign } from 'jsonwebtoken';

interface IAuthenticateCliente {
    username: string,
    password: string
}

export class AuthenticateClientUseCase {
    async execute({ username, password }: IAuthenticateCliente) {
        if (!password) {
            throw new Error("Password not informed!")
        }

        const client = await prisma.clients.findUnique({
            where: {
                username
            }
        })

        if (!client)
            throw new Error("Invalid username or password")

        const passwordCompare = await compare(password, client.password)

        if (!passwordCompare)
            throw new Error("Invalid username or password")

        const token = sign({ username }, "bbe851f3edce948cc0dd3973e7ac36a9", {
            subject: client.id,
            expiresIn: "24h"
        })

        return token;
    }
}