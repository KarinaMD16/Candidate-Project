import { jwtDecode } from 'jwt-decode'


export function isAuthenticated() {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
  const { exp } = jwtDecode<{ exp: number }>(token)
  return exp < Date.now() / 1000
  } catch (err) {
    return false;
  }
}

export function signIn(token: string) {
  localStorage.setItem('token', token);
}

export function signOut() {
  localStorage.removeItem('token');
}