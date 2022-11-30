import { hash } from 'bcrypt';
import { prisma } from '../../../../batabase/prisma-client';

interface ICreateClient {
    username: string;
    password: string;
}

export class CreateClientuseCase {
    async execute({ username, password }: ICreateClient) {
        const clientExist = await prisma.clients.findFirst({
            where: {
                username
            }
        })

        if (clientExist)
            throw new Error("Client already exists");

        const passwordHash = await hash(password, 10)

        const newClient = await prisma.clients.create({
            data: {
                username: username,
                password: passwordHash
            }
        })

        return newClient;
    }
}