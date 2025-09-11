import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { MiCuenta } from '../pages/MiCuenta/MiCuenta'
import { Documentos } from '../pages/Documentos/Documentos'
import { Nosotros } from '../pages/Nosotros/Nosotros'
import { CentroAlumnos } from '../pages/Centro-Alumnos/CentroAlumnos'
import { CentroPadres } from '../pages/Centro-Padres/CentroPadres'
import { Contacto } from '../pages/Contactanos/Contacto'

export const AppRouter = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>

                    <Route path='/' element={<Home/>} />
                    <Route path='/nosotros' element={<Nosotros/>}/>
                    <Route path='/contactanos' element={<Contacto/>}/>
                    <Route path='/mi-cuenta' element={<MiCuenta/>} />
                    <Route path='/documentos' element={<Documentos/>}/>
                    <Route path='/centro-alumnos' element={<CentroAlumnos/>}/>
                    <Route path='/centro-padres' element={<CentroPadres/>}/>

                </Routes>
            </BrowserRouter>
        </>
    )
}
