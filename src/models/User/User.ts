export interface User {
    id: number,
    nombre: string,
    apellido: string,
    correoElectronico: string,
    password: string,
    habilidades : [],
    role : string,
    token: string
}

export const UserInitalSate = {
    id: 0,
    nombre: '',
    apellido: '',
    correoElectronico: '',
    pasword: '',
    habilidades: [],
    role: '',
    token: ''
}
