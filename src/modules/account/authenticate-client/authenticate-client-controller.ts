import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./authenticate-client-usecase";

export class AuthenticateClientController {
    async handler(request: Request, response: Response) {
        const { username, password } = request.body

        const authenticateClientUseCase = new AuthenticateClientUseCase();
        const token = await authenticateClientUseCase.execute({
            username,
            password
        })

        return response.json(token);
    }
}
