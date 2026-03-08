import api from './api';

export const getProjects = async () =>{
  const res=api.get('/projects')
  return (await res).data;
};

export const addProject = async (formdata) =>{
  const token=localStorage.getItem('token')
  const res=api.post('/projects',formdata,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
  return (await res).data;
};

export const deleteProject = async (id) =>{
  const token=localStorage.getItem('token')
  const res=api.delete(`/projects/${id}`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
  return (await res).data;
};