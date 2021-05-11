export interface LoginCredentials {
    email: string,
    password: string
}

export interface RegisterCredentials extends LoginCredentials {
    country: string
}

export interface User extends RegisterCredentials {
    
}