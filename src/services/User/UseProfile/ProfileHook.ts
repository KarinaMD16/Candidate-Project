
import { useMutation,  useQuery,  useQueryClient } from "@tanstack/react-query"
import { ActHabilidad, gethabilidades, getProfile } from "../ProfileService/ProfileService"


export function useProfile() {
 const queryClient = useQueryClient();

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
    ActHabilidadUser
  }
}

export const useGetHabilidades = () => {
    const { data, isLoading: isPending, error } = useQuery({
        queryKey: ['Habilidad'],
        queryFn: () => gethabilidades(),
    });
  
    return { data, isPending, error };
}