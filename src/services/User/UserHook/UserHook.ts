
import { useMutation } from '@tanstack/react-query'
import { loginUser, createUser } from '../UserService/UserService'
import { useNavigate } from 'react-router-dom'



export const useLogin = () => {
const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => loginUser(email, password),
    onSuccess: (res) => {
      localStorage.setItem('token', String(res.token))
      navigate('/Perfil')
    }
  })
}

export const useRegister = () => {
  
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => navigate('/login')
  })
}

