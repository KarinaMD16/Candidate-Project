import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { signIn } from '../../utils/auth'
import { createUser, loginUser } from '../../services/User/UserService'


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
        return "Error al iniciar sesión después del registro"
      }
    }
  })
}