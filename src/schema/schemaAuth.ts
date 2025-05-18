import { z } from 'zod'

export const loginSchema = z.object({
  correoElectronico: z.string().email('Correo inválido'),
  password: z.string().min(6, 'Mínimo 6 caracteres')
})

export const registerSchema = z.object({
  nombre: z.string().min(1, 'Nombre requerido'),
  apellido: z.string().min(1, 'Apellido requerido'),
  correoElectronico: z.string().email('Correo inválido'),
  password: z.string().min(6, 'Mínimo 6 caracteres')
})
