import { createFileRoute } from '@tanstack/react-router'
import RegisterForm from '../../components/Register'

export const Route = createFileRoute('/Register')({
  component: RouteComponent,
})

function RouteComponent() {
  return <RegisterForm />
}
