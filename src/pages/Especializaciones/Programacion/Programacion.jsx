import React from 'react'
import { Nav } from '../../../assets/components/Nav'
import { Malla } from './components/Malla'

export const Programacion = () => {
    return (
        <>
            <div className='min-h-screen'>
                <div className='sticky top-0 z-10'>
                    <Nav/>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-2'>
                    <div className='w-full'>
                        <h1 className='text-3xl font-bold text-center mx-auto text-theme-old-green-dark my-10'>Introduccion</h1>
                        <p className='text-start p-4 '>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore reprehenderit sequi deserunt tempore? Cupiditate deleniti blanditiis, maiores explicabo maxime facilis iure adipisci, qui fugiat sit a culpa quibusdam numquam? Dicta?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore reprehenderit sequi deserunt tempore? Cupiditate deleniti blanditiis, maiores explicabo maxime facilis iure adipisci, qui fugiat sit a culpa quibusdam numquam? Dicta?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab exercitationem eaque esse animi. Ipsum nulla provident consequatur unde voluptatum nesciunt perferendis, eius doloremque recusandae perspiciatis! Molestiae odit amet ab fuga.
                        </p>
                    </div>  
                    <div className='p-4'>
                        {/* COLOCAR UNA IMAGEN O UN CARROUSEL DE IMAGENES (PUEDEN SER LAS DE PUERTAS ABIERTAS) */}
                        <img src="/programacion-min.avif" className='mx-auto rounded-2xl my-5' alt='Imagen representativa de nuestra especializacion en Programaicon, la foto fue tomada en un dia de puertas abiertas.'/>
                    </div>
                </div>

                <div className='min-h-screen p-5'>
                    <Malla/>
                </div>   

                <div>
                    <iframe 
                        className='w-full h-96 lg:h-screen p-10' 
                        src="https://www.youtube.com/embed/-RV-KUR9xzk?si=QBdOVb7yMO2YE0Eb&amp;start=1" 
                        title="Video sobre especiazacion de programacion" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                    >
                    </iframe>
                </div>             
                
            </div>
        </>
    )
}
