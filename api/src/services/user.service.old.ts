import users from "../mocks/user.mock.ts";
import type { User, CreatUser, UpdateUser } from "../types/user.type.ts";

export function findAllUsers(): User[] {
    return users;
}

export function findUserById(id: number): User {
    const user = users.find(user => user.id === id);

    if (!user){
        throw new Error(`Usruario com id ${id} não encontrado.`);
    }return user;
}

export function insertUser({
    name,
    email,
    password 
    }: CreatUser): User {
        const user: User = {
            id: users[users.length -1].id +1,
            name,
            email,
            password
        }
        users[users.length] = user;

        return user;

}

export function modifyUser(id: number, {
    name,
    email,
    password 
}: UpdateUser): User {
    function findUser(){
        for (let i = 0; i < users.length; i++){
            if (users[i].id === id){
                return users[i];
            }
        }

    }
    const user = findUser();

    if (!user) throw new Error(`Usruario com id ${id} não encontrado.`);

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;
     
    return user;
}

export function removeUser(id: number): void {
    const userIndex = users.findIndex(user => user.id === id);
    //o findindex se nao encontrar ele retorna (-1)

    if (userIndex === -1) {
        throw new Error(`Usuário com id ${id} não encontrado.`);
    }

    //o splice retira o id do array 
    users.splice(userIndex, 1);
}