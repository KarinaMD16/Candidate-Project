import axiosPrivate from "../../api/apiAuth";
import type { Oferta } from "../../models/Oferta";

export const getOfertas = async (): Promise<Oferta[]> => {
  const response = await axiosPrivate.get<Oferta[]>("/Ofertas");
  return response.data;
};


export const getMatchingOfertas = async (id:number): Promise<Oferta[]> => {
  const response = await axiosPrivate.get<Oferta[]>(`Ofertas/candidato/${id}/ofertas`);
  return response.data;
}