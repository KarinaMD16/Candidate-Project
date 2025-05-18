import type { User } from '../../../models/User/User'
import axiosPrivate from '../../../api/apiAuth'

export async function createUser(user: User): Promise<User>{
    const response = await axiosPrivate.post(`/Candidate`, user);
    return response.data;
}
export async function loginUser(email: string, password: string): Promise<User> {
    const response = await axiosPrivate.post(`/Auth`, { email, password });
    return response.data;
}