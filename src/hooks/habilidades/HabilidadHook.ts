import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteHabilidad, getHabilidades, postHabilidadesCandidato } from "../../services/habilidades/habilidadesService"

export function useGetHabilidades() {
  const { data: Habilidades, isLoading, error } = useQuery({
    queryKey: ['habilidades'],
    queryFn: getHabilidades
  })

  return {
    Habilidades,
    loadingHabilidades: isLoading,
    errorHabilidades: error
  }
}

export function usePostHabilidadesCandidato() {
   const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn:({ idCandidato, idHabilidad }: 
          { idCandidato: number; idHabilidad: number }) =>
          postHabilidadesCandidato(idCandidato, idHabilidad),
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries({ queryKey: ['habilidades'] })
        },
    })

    return mutation;
}

export function useDeleteHabilidad() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ candidatoId, habilidadId }: { candidatoId: number; habilidadId: number }) =>
      deleteHabilidad(candidatoId, habilidadId),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['habilidades'] })
    },
  })

  return mutation;
}