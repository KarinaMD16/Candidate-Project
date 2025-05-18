import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '../schema/schemaAuth'
import { useLogin } from '../services/User/UserHook/UserHook'
import { useNavigate } from 'react-router-dom'
import type { LoginData } from '../schema/AuthType'

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  })
  const mutation = useLogin()
    const navigate = useNavigate()

  const onSubmit = (data: LoginData) =>
    mutation.mutate({
      email: data.correoElectronico,
      password: data.password
    })

  return (   
    <section className='login'>
    <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
        <div>
            <h1 className='Regard'>INICIA SESIÓN</h1>
        </div>
        
      <input type="email" {...register('correoElectronico')} placeholder="Email" />
      {errors.correoElectronico && <p>{errors.correoElectronico.message}</p>}

      <input type="password" {...register('password')} placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}
        <div className='button-group'>
            <button type="button" onClick={() => navigate('/register')}>Registrarse</button>
            <button type="submit">Iniciar Sesion</button>
        </div>
    </form>
    </section>
  )
}