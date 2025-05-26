import axiosPrivate from "../../api/apiAuth"
import type { Habilidad } from "../../models/Habilidad"

export const getHabilidades = async (): Promise<Habilidad[]> => {
  const response = await axiosPrivate.get<Habilidad[]>("/Habilidad");
  return response.data;
};

export const postHabilidadesCandidato = async ( idCandidato?: number, idHabilidad?: number): Promise<Habilidad[]> => {
  const response = await axiosPrivate.post<Habilidad[]>(`/Candidate/asociarHabilidad?candidatoId=${idCandidato}&habilidadId=${idHabilidad}`);
  return response.data;
};