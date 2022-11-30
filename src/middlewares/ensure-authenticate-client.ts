import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

interface IPayload {
    sub: string;
}

export async function EnsureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({
            message: "Token missing",
        })
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(token, "bbe851f3edce948cc0dd3973e7ac36a9") as IPayload

        request.id_client = sub;

        return next();
    } catch (err) {
        return response.status(401).json({
            message: "Invalid token",
        })
    }
}