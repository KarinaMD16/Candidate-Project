import { createFileRoute, redirect } from '@tanstack/react-router'
import {isTokenExpired} from '../utils/token'

export const Route = createFileRoute('/Perfil')({
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
  return <div>Perfil</div>
}