import axiosPrivate from "../../../api/apiAuth"

export const getProfile = async () => {
  const res = await axiosPrivate.get('/Candidate/profile')
  return res.data
}

export const ActHabilidad = async (habilidad: string) => {
  const res = await axiosPrivate.post('/Candidate/habilidades', habilidad, {
    headers: { 'Content-Type': 'application/json' }
  })
  return res.data
}
