import api from './api';

export const login = async (email,password) =>{
  const res=api.post('/auth/login',{
    email,
    password
  })
  return (await res).data;
};

