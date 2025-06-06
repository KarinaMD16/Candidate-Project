export interface User {
    Id: number,
    nombre: string,
    apellido: string,
    correoElectronico: string,
    password: string,
    habilidades : [],
    role : string,
    token: string
}


export const UserInitalSate = {
    Id: 0,
    nombre: '',
    apellido: '',
    correoElectronico: '',
    pasword: '',
    habilidades: [],
    role: '',
    token: ''
}

export type UserFormFields = {
    nombre: string,
    apellido: string,
    correoElectronico: string,
    password: string
}
export type LoginFormFields = {
    correoElectronico: string,
    password: string
}
