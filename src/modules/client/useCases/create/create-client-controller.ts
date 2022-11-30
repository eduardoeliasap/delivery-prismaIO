import { Request, Response } from "express";
import { CreateClientuseCase } from "./create-client-usecase";

export class CreateClientController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const createClientUseCase = new CreateClientuseCase();
        const result = await createClientUseCase.execute({
            username, password
        });

        return response.json(result);
    }
}