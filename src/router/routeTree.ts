// src/app/routeTree.tsx
import { rootRouteWithContext, Route, lazyRouteComponent } from '@tanstack/react-router'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Perfil from '../pages/Perfil'

// Simulamos auth para este ejemplo
const isAuthenticated = () => !!localStorage.getItem('token')

// Crear root route
const rootRoute = rootRouteWithContext<{
  auth: boolean
}>()()

// Rutas públicas
const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
})

const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: Register,
})

// Ruta protegida
const perfilRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/perfil',
  component: Perfil,
  beforeLoad: async () => {
    if (!isAuthenticated()) {
      throw new Error('Unauthorized')
    }
  }
})

export const routeTree = rootRoute.addChildren([
  loginRoute,
  registerRoute,
    perfilRoute,
])
