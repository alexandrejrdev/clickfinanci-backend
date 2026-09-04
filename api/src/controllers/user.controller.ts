import type { Request, Response } from "express";
import * as UserService from "../services/user.service.ts";


export function getAllUsers(_request: Request, response: Response): void {
    const users = UserService.findAllUsers();

    response.status(200).json(users);
}

export function getUserById(request: Request, response: Response): void {
    
    const id = Number(request.params.id);

    const userId = UserService.findUserById(id);

    response.status(200).json(userId);
}