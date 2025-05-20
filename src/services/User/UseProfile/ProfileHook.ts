import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { ActHabilidad, getProfile } from "../ProfileService/ProfileService"

const HABILIDADES_DISPONIBLES = ['C#', 'MySQL', 'SQL', 'NEST']

export function useProfile() {
  const queryClient = useQueryClient()

  const { data: perfil, isLoading, error } = useQuery({
    queryKey: ['perfil'],
    queryFn: getProfile
  })

  const { mutateAsync: ActHabilidadUser } = useMutation({
    mutationFn: ActHabilidad,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['perfil'] }) // Refrescar perfil
    }
  })

  return {
    perfil,
    loading: isLoading,
    error,
    habDisponibles: HABILIDADES_DISPONIBLES,
    ActHabilidadUser
  }
}