import { useMutation } from '@tanstack/react-query'
import { loginUser, createUser } from '../UserService/UserService'
import { useNavigate } from '@tanstack/react-router'

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
    onSuccess: () => navigate({ to: '/Login' }) 
  })
}






