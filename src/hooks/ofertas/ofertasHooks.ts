import { useQuery } from "@tanstack/react-query";
import axiosPrivate from "../../api/apiAuth";
import type { Oferta } from "../../models/Oferta";

export const useGetOfertas = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['ofertas'],
    queryFn: async () => {
      const response = await axiosPrivate.get<Oferta[]>('/Ofertas');
      return response.data;
    },
  });

  return {
    ofertas: data,
    isPending,
    error
  };
};

export const useGetMatchingOfertas = (id: number | undefined, enabled: boolean) => {
  const { data, isPending, error } = useQuery({
    queryKey: ['ofertas', id],
    queryFn: async () => {
      const response = await axiosPrivate.get<Oferta[]>(`Ofertas/candidato/${id}/ofertas`);
      return response.data;
    },
    enabled: enabled && !!id, 
  });

  return {
    matchingOfertas: data,
    isPending,
    error
  };
};
