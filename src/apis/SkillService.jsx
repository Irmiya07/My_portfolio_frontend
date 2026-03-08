import api  from "./api";

export const getSkills = async () =>{
  const res=api.get('/skills')
  return (await res).data;
};

export const addSkill = async (formdata) =>{
  const token=localStorage.getItem('token')
  const res=api.post('/skills',formdata,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
  return (await res).data;
};

export const deleteSkill = async (id) =>{
  const token=localStorage.getItem('token')
  const res=api.delete(`/skills/${id}`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
  return (await res).data;
};