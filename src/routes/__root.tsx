import { Outlet } from '@tanstack/react-router'

export const Route = {
  id: '__root',
  component: () => <Outlet />,
}
