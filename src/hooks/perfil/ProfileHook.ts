
import { useQuery } from "@tanstack/react-query"
import { getProfile } from "../../services/perfil/ProfileService"

export function useGetProfile() {
  const { data: perfil, isLoading, error } = useQuery({
    queryKey: ['perfil'],
    queryFn: getProfile
  })

  return {
    perfil,
    loading: isLoading,
    error
  }
}
