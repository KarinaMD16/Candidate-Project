import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getHabilidades, postHabilidadesCandidato } from "../../services/habilidades/habilidadesService"

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
