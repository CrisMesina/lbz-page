import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Documentos } from '../pages/Documentos/Documentos'
import { Nosotros } from '../pages/Nosotros/Nosotros'
import { CentroAlumnos } from '../pages/Centro-Alumnos/CentroAlumnos'
import { CentroPadres } from '../pages/Centro-Padres/CentroPadres'
import { Contacto } from '../pages/Contactanos/Contacto'
import { Programacion } from '../pages/Especializaciones/Programacion/Programacion'
import { Agropecuaria } from '../pages/Especializaciones/Agropecuaria/Agropecuaria'
import { Administracion } from '../pages/Especializaciones/Administracion/Administracion'
import { HC } from '../pages/Especializaciones/HC/HC'
import { Formulario } from '../pages/Formulario'
import { NoticiaDetail } from '../pages/Noticias/NoticiaDetail'
import { LoginForm } from '../assets/components/LoginForm'
import { ProtectedRoute } from './ProtectedRoutes'
import { AuthProvider } from '../hooks/useAuth'



export const AppRouter = () => {
    return(
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>

                        <Route path='/' element={<Home/>} />
                        <Route path='/nosotros' element={<Nosotros/>}/>
                        <Route path='/contactanos' element={<Contacto/>}/>
                        <Route path='/documentos' element={<Documentos/>}/>
                        <Route path='/centro-alumnos' element={<CentroAlumnos/>}/>
                        <Route path='/centro-padres' element={<CentroPadres/>}/>
                        <Route path='/programacion' element={<Programacion/>}/>
                        <Route path='/agropecuaria' element={<Agropecuaria/>}/>
                        <Route path='/administracion' element={<Administracion/>}/>
                        <Route path='/hc' element={<HC/>}/>



                        <Route path='/noticias/:id' element={<NoticiaDetail/>}/>
                        <Route path='/login' element={<LoginForm/>}/>

                        <Route path='/admin/form' element={
                            <ProtectedRoute requireAdmin={true}>
                                <Formulario/>
                            </ProtectedRoute>
                        }/>

                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}
