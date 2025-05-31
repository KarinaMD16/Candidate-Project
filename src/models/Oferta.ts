export interface Oferta {
    id: number, 
    puesto: string,
    descripcion: string,
    empresaId: number,
    icono:string,
    empresaNombre:string
    habilidades: {
        id: number,
        name: string,
        icono: string
    }[];
} 