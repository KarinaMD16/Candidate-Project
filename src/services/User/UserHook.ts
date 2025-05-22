import { useMutation } from '@tanstack/react-query'
import { loginUser, createUser } from './UserService'
import { useNavigate } from '@tanstack/react-router'
import { signIn } from '../../utils/auth'

export const useLogin = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: ({ correoElectronico, password }: { 
      correoElectronico: string
      password: string 
    }) => loginUser(correoElectronico, password), 
    
    onSuccess: (res) => {
      signIn(res.token)
      navigate({ to: '/Perfil' }) 
    }
  })
}

export const useRegister = () => {
  const navigate = useNavigate()
  
  return useMutation({
    mutationFn: createUser,
    onSuccess: async (res) => {
      try {
        const loginResponse = await loginUser(res.correoElectronico, res.password)
        signIn(loginResponse.token)
        navigate({ to: '/Perfil' })
      } catch (error) {
        console.error('Error al iniciar sesión después del registro:', error)
        return "Error al completar el proceso de registro e inicio de sesión"
      }
    }
  })
}






