import prisma from "../lib/prisma.ts";
import type { CreateUser, UpdateteUser } from "../schemas/user.schema.ts";
import type { User } from "../types/user.type.ts";

export async function findAllUsers(): Promise<User[]>{
    return await  prisma.user.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function finduserById( id:number ):Promise<User>{
    const user =  await prisma.user.findUnique({ where: { id } });

    if (!user) throw new Error ('Usuario não enconstrado');

    return user;
}

export async function insertUser(datas: CreateUser):Promise<User>{
    return await prisma.user.create ({ data: datas })
}

export async function modifyUser( id: number, datas: UpdateteUser ):Promise<User>{
    await finduserById(id);

    const user = await prisma.user.update({
        where: {id},
        data: datas
    })
    return user;
}

export async function removeUser(id: number):Promise<void>{
    await finduserById(id);
    await prisma.user.delete({where: {id} });
}