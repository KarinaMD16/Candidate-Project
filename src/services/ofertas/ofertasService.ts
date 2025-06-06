import axiosPrivate from "../../api/apiAuth";
import type { Oferta } from "../../models/Oferta";

export const getOfertas = async (): Promise<Oferta[]> => {
  const response = await axiosPrivate.get<Oferta[]>("/Ofertas");
  return response.data;
};


export const getMatchingOffertas = async (id:number): Promise<Oferta[]> => {
  const response = await axiosPrivate.get<Oferta[]>(`/Ofertas/candidato/${id}/ofertas`);
  return response.data;
}

export const createApplication = async (
  { candidatoId, ofertaId }: { candidatoId: number, ofertaId: number }
  ): Promise<Oferta[]> => {
  const response = await axiosPrivate.post<Oferta[]>('/Candidate/postular', { candidatoId, ofertaId });
  return response.data;
}

export const getAplicaciones = async (id:number): Promise<Oferta[]> => {
  const response = await axiosPrivate.get<Oferta[]>(`/Candidate/${id}/postulaciones`);
  return response.data;
}

export async function deleteAplicacion(candidatoId:number, ofertaId:number){
    const response = await axiosPrivate.delete(`/Candidate/${candidatoId}/eliminiarPostulacion/${ofertaId}`);
    return response.data;
}