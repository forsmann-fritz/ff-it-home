export interface LoginCredentials {
    email: string,
    password?: string
}

export interface RegisterCredentials extends LoginCredentials {
}

export interface User extends RegisterCredentials {
    uid: string,
    role: "ADMIN" | "NOPERMISSION" | "USER"
}