//import axios from "axios"
import axiosPrivate from "../../../api/apiAuth"
import type { Habilidad } from "../../../models/User/Habilidad"
import type { Perfil } from "../../../models/User/User"

export const getProfile = async ():Promise<Perfil>=> {
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
  const response = await axiosPrivate.get<Habilidad[]>(`/habilidad`);
  return response.data;
};

//probando 

export const addHabilidad = async (id : number): Promise<boolean> => {
  const res = await axiosPrivate.post(`/habilidad/AddHabilidad?id=${id}`);
  return res.data; 
}

export const deleteHabilidad = async (id:number): Promise<boolean> => {
  const res = await axiosPrivate.delete(`/habilidad/DeleteHabilidad?id=${id}`);
  return res.data; 
}
