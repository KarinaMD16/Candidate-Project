//import axios from "axios"
import axiosPrivate from "../../api/apiAuth"

export const getProfile = async () => {
  const res = await axiosPrivate.get('/Candidate/perfil')
  return res.data
}
