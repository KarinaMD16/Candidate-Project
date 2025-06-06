import { createFileRoute } from '@tanstack/react-router'
import LoginForm from '../../components/Login'

export const Route = createFileRoute('/(auth)/Login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LoginForm />
}
