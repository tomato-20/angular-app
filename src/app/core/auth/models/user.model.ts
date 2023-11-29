export enum ROLES {
    ADMIN = 'admin',
    SUPER_ADMIN = 'super-admin',
    USER='user'
} 

export type User = {
    id: number;
    username: string,
    email: string,
    password: string,
    token: string,
    role: ROLES
}