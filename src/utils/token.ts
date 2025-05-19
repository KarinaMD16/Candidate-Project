import { jwtDecode } from 'jwt-decode'

export function isTokenExpired(token: string) {
  const { exp } = jwtDecode<{ exp: number }>(token)
  return exp < Date.now() / 1000
}
