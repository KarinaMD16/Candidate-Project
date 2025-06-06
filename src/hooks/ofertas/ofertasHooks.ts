import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosPrivate from "../../api/apiAuth";
import type { Oferta } from "../../models/Oferta";
import { createApplication, deleteAplicacion, getAplicaciones } from "../../services/ofertas/ofertasService";

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

export const useGetMatchingOfertas = (id: number | undefined, options = {}) => {
  const { data, isPending, error } = useQuery({
    queryKey: ['ofertas', id],
    queryFn: async () => {
      const response = await axiosPrivate.get<Oferta[]>(`Ofertas/candidato/${id}/ofertas`);
      return response.data;
    },
    enabled: !!id, 
    ...options // Spread operator to include any additional options passed
  });

  return {
    matchingOfertas: data,
    isPendingMatching: isPending,
    errorMatching: error
  };
};


export const useGetAplicaciones = (candidatoId?: number, options = {}) => {
  const { data, isPending, error } = useQuery({
    queryKey: ['aplicaciones', candidatoId],
    queryFn: () => getAplicaciones(candidatoId!), 
    enabled: !!candidatoId,
    ...options,
  });

  return {
    aplicaciones: data,
    isPendingAplicaciones: isPending,
    errorAplicaciones: error,
  };
};

export const useCreateApplication = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createApplication,
    onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries({ queryKey: ['aplicaciones'] })
        },
    })

  return mutation;
}

export function useDeleteAplicacion() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ candidatoId, ofertaId }: { candidatoId: number; ofertaId: number }) =>
      deleteAplicacion(candidatoId, ofertaId),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['aplicaciones'] })
    },
  })

  return mutation;
}