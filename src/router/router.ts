import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet
} from '@tanstack/react-router';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Perfil from '../pages/Perfil';
import ProtectedRoute from '../components/ProtectedRoute';


const rootRoute = createRootRoute({ component: Outlet });


const indexRoute = createRoute({
  path: '/',
  getParentRoute: () => registerRoute,
});

const loginRoute = createRoute({
  path: '/login',
  getParentRoute: () => rootRoute,
  component: Login,
});

const registerRoute = createRoute({
  path: '/register',
  getParentRoute: () => rootRoute,
  component: Register,
});

const protectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'protected',
  component: ProtectedRoute,
});

const perfilRoute = createRoute({
  path: '/perfil',
  getParentRoute: () => protectedRoute,
  component: Perfil,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  protectedRoute.addChildren([
    perfilRoute,
  ]),
]);

export const router = createRouter({ routeTree });
