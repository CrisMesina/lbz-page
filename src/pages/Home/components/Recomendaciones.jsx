import React from 'react'
import { FondoCirculos } from './FondoCirculos'

export const Recomendaciones = () => {

    const recomendaciones = [
        {
            id : 1,
            title: "Excelentes Profesores",
            img : "/tea3.avif",
            texto : "Contamos con los mejores profesores a nivel regional, Nuestros profesores se caracterizan por tener un perfil proactivo y ético. Estan llenos de entusiamo por enseñar y hacer que nuestros alumnos lleguen a la cima del exito.",
            nombre : "Juan Perez",
            animation: "scroll-items-down",
            cargo : "Director",
            alt: "Imagen de la persona que entrega la recomendacion de nuestra institucion"
        },
        {
            id : 2,
            title: "Buena convivencia",
            img : "/tea3.avif",
            texto : "Creemos que la convivencia es parte de un todo, donde los principales actores de este establecimiento y proceso educativo son nuestros estudiantes. Ellos a partir de un pensamiento critico y reflexivo pueden desarrollar el aprendizaje colaborativo, enfrentar distintas problemáticas y junto con ello crear los espacios en los cuales se genere el desarrollo de habilidades individuales y grupales.",
            nombre : "Juan Perez",
            animation: "scroll-items-down",
            cargo : "Director",
            alt: "Imagen de la persona que entrega la recomendacion de nuestra institucion" 
        },
        {
            id : 3,
            title: "Oportunidades despues de egresar",
            img : "/tea3.avif",
            texto : "Después que egresar apoyamos a nuestros alumnos en buscar el lugar de práctica y realizamos con ellos un plan de seguimiento, hay empresas que ofrecen cupos laborales para algunos estudiantes. Recuerda siempre que puedes continuar estudiando y ser un profesional de nivel superior o universitario. También te puedes desempeñar en empresas agrícolas de la zona o comenzar tu propio negocio.",
            nombre : "Juan Perez",
            animation: "scroll-items-down",
            cargo : "Director",
            alt: "Imagen de la persona que entrega la recomendacion de nuestra institucion" 
        },
        {
            id : 4,
            title: "Programa de integración escolar",
            img : "/tea3.avif",
            texto : "El programa de integración escolar (PIE) está compuesto por equipo multidisciplinario de profesionales que buscan como objetivo central favorecer el proceso educativo de todos estudiantes, con el propósito de enriquecer su inclusión al mundo laboral.",
            nombre : "Juan Perez",
            animation: "scroll-items-down",
            cargo : "Director",
            alt: "Imagen de la persona que entrega la recomendacion de nuestra institucion" 
        },
    ]

    const isMobile = window.innerWidth < 768;

    return(
        <>
            <div className='md:grid md:grid-cols-2 grid-cols-1' id='recomendaciones'>
                {recomendaciones.map((r, i) =>(
                    <div key={i} className={`flex mx-2 ${isMobile ? '': 'scroll-items-top delay-300'} md:mx-5  md:my-20`}>
                        <img src={r.img} className=' brightness-75 w-20 h-20 aspect-square my-4 rounded-full hover:border hover:border-theme-old-green' alt="" />
                        <div className='flex-col'>
                            <h1 className='text-theme-old-green  mx-2 p-1 font-extrabold text-xl mb-5'>{r.title}</h1>
                            <p className='text-start text-white dark:text-white p-1 mx-2'>{r.texto}</p>
                            <span className='flex p-1 mt-4 mx-2 text-[12px] italic'>
                                <span className='text-theme-old-green font-bold '>{r.nombre}</span>, 
                                <p className='font-theme-caveat font-bold text-white'>{r.cargo}</p>
                            </span>
                        </div>
                    </div>
                ))}
                
            </div>
        </>
    )
}
