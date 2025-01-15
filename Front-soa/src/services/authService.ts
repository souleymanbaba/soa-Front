import api from './api';
import { LoginRequest, SignupRequest, User } from '../types/auth';

export const authService = {
  login: (data: LoginRequest) => api.post('/signin', data),
  signup: (data: SignupRequest) => api.post('/signup', data),
  logout: () => api.post('/logout'),
  getAllUsers: () => api.get<User[]>('/users'),
  deleteUser: (id: number) => api.delete(`/users/${id}`),
  updateUserRoles: (id: number, roles: string[]) => 
    api.put(`/users/${id}/roles`, { role: roles }),
  activateUser: (id: number) => api.put(`/users/${id}/activate`),
  deactivateUser: (id: number) => api.put(`/users/${id}/deactivate`),
};