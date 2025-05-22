import { useMutation } from '@tanstack/react-query'
import { loginUser, createUser, getUserByemail } from './UserService'
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
      localStorage.setItem('token', String(res.token))
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
        localStorage.setItem('token', String(res.token))
        signIn(res.token)
        navigate({ to: '/Perfil' })
      } catch (error) {
        console.error('Error al completar el registro:', error)
        return ("Error al completar el registro")
      }
    }
  })
}






