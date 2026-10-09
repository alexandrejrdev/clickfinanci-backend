import type { User } from "../types/user.type.ts";

const users: User[] = [{
    id: 1,
    name: 'Alexandre Junior',
    email: 'alexandre@gmail.com',
    password: crypto.randomUUID()
}, {
    id: 2,
    name: 'Juliana Andrade',
    email: 'juliana@gmail.com',
    password: crypto.randomUUID()
}, {
    id: 3,
    name: 'Hanna Kele',
    email: 'Hanna@gmail.com',
    password: crypto.randomUUID()
}]

export default users;