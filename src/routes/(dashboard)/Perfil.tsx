import { createFileRoute, redirect } from '@tanstack/react-router'
import {isTokenExpired} from '../../utils/token'
import Profile from '../../pages/Profile'

export const Route = createFileRoute('/(dashboard)/Perfil')({
    beforeLoad: () => {
        const token = localStorage.getItem('token')
        if (!token || isTokenExpired(token)) {
            throw redirect({
                to: '/Login',
            })
        }
    },
  component: PerfilComponent,
})

function PerfilComponent() {
  return <Profile>
    
  </Profile>
}