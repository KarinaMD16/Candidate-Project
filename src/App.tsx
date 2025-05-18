import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Rutas protegidas */}
      <Route element={<PrivateRoute />}>
       {/*<Route path="/perfil" element={<Perfil/>} />*/} 
      </Route>
    </Routes>
  )
}

export default App