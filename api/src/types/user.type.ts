export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
}

export type CreatUser = Omit<User,'id'>;

export type UpdateUser = Partial<Omit<User,'id'>>;


