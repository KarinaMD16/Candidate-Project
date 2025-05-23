import { createFileRoute, redirect } from '@tanstack/react-router'
import { isAuthenticated } from '../../utils/auth'
import Profile from '../../components/Profile'



export const Route = createFileRoute('/(dashboard)/Perfil')({
    beforeLoad: () => {
        if (!isAuthenticated()) {
            throw redirect({
                to: '/Login',
            })
        }
    },
  component: PerfilComponent,
})

function PerfilComponent() {
  return <Profile/>

}