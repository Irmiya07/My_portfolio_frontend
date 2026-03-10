
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Login from './Pages/admin/Login'
import Dashboard from './Pages/admin/Dashboard'
import ProtectedRoute from './Components/common/ProtectedRoute'
import {NaviBar} from "./Components/Layout/NaviBar";

import { ProjectForm } from "./Pages/admin/ProjectForm"
import { CertificateForm } from "./Pages/admin/CertificateForm"
import {PageNotFound} from "./Pages/PageNotFound"
import { useEffect } from 'react'



function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <NaviBar />
      <div className='min-h-screen bg-(--page-bg)
px-3 sm:px-5 lg:px-8
py-4 sm:py-5'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<Login/>}/>
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>} />
        <Route path="/admin/logout" element={
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>} />
        <Route path="/admin/project-form" element={
          <ProtectedRoute>
            <ProjectForm />
          </ProtectedRoute>} />
        <Route path="/admin/certificate-form" element={
          <ProtectedRoute>
            <CertificateForm />
          </ProtectedRoute>} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </div>

    </>
  )
}

export default App
