import API from './axios';

export const fetchAllTasks = (search = '', status = 'All') => {
  const query = new URLSearchParams();
  if (search) query.append('search', search);
  if (status && status !== 'All') query.append('status', status);
  return API.get(`/tasks?${query.toString()}`);
};
export const createTask = (data) => API.post('/tasks', data);
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
export const fetchTalents = () => API.get('/users/talents');
