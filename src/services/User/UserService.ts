import type { User, UserFormFields } from '../../models/User/User'
import axiosPrivate from '../../api/apiAuth'

export async function createUser(user: UserFormFields): Promise<User>{
    const response = await axiosPrivate.post(`/Candidate/register`, user);
    return response.data;
}
export async function loginUser(email: string, password: string): Promise<User> {
    const response = await axiosPrivate.post(`/Auth`, { email, password });
    return response.data;
}
export async function getUserByemail(email: string): Promise<boolean> {
    const response = await axiosPrivate.get(`/Candidate/find?email=${email}`);
    return response.data;
}