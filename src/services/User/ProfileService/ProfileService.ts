//import axios from "axios"
import axiosPrivate from "../../../api/apiAuth"
import type { Habilidad } from "../../../models/User/Habilidad"

export const getProfile = async () => {
  const res = await axiosPrivate.get('/Candidate/perfil')
  return res.data
}

export const ActHabilidad = async (habilidad: string): Promise<Habilidad> => {
  const res = await axiosPrivate.post('/Candidate/habilidades', habilidad, {
    headers: { 'Content-Type': 'application/json' }
  })
  return res.data
}

export const gethabilidades = async (): Promise<Habilidad[]> => {
  const response = await axiosPrivate.get<Habilidad[]>("/habilidad");
  return response.data;
};
