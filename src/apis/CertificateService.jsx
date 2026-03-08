import api from './api';

export const getCertificates = async () =>{
  const res=api.get('/certificates')
  return (await res).data;
};

export const addCertificate = async (formdata) =>{
  const token=localStorage.getItem('token')
  const res=api.post('/certificates',formdata,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
  return (await res).data;
};

export const deleteCertificate = async (id) =>{
  const token=localStorage.getItem('token')
  const res=api.delete(`/certificates/${id}`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
  return (await res).data;
};