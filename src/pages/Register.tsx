import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../schema/schemaAuth'
import { useRegister } from '../services/User/UserHook/UserHook'
import {  useNavigate } from 'react-router-dom'
import type { RegisterFormFields } from '../schema/AuthType'
import type { User } from '../models/User/User'



export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormFields>({
    resolver: zodResolver(registerSchema)
  })
  const mutation = useRegister()
  const navigate = useNavigate()

  const onSubmit = (data: RegisterFormFields) => {

    mutation.mutate({

        id: 0, 
         ...data,
        habilidades: [],
        role: ''
    } as User)
  }

  return (
    <section className='register'>
    
        <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
            <div>
                <h2>ÚNETE</h2>
            </div>
            <input type ="text"{...register('nombre')} placeholder="Nombre" />
            {errors.nombre && <p>{errors.nombre.message}</p>}

            <input type ="text" {...register('apellido')} placeholder="Apellido" />
            {errors.apellido && <p>{errors.apellido.message}</p>}

            <input type ="email" {...register('correoElectronico')} placeholder="Email" />
            {errors.correoElectronico && <p>{errors.correoElectronico.message}</p>}

            <input type="password" {...register('password')} placeholder="Password" />
            {errors.password && <p>{errors.password.message}</p>}
            <div className='button-group'>     
                <button type="button" onClick={() => navigate('/login')}>Iniciar Sesión</button>
                <button type="submit">Registrarse</button>
            </div>

        </form>

    </section>
  )
}
