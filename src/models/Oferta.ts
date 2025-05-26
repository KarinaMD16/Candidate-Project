export interface Oferta {
    id: number, 
    puesto: string,
    descripcion: string,
    empresaId: number
    empresaNombre:string
    habilidades: {
        id: number,
        name: string
    }[];
} 