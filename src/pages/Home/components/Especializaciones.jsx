import React, { useState } from 'react'

export const Especializaciones = () => {


    const [hovered, setIsHovered] = useState(null);

    const isMobile = window.innerWidth < 768;

    const especializaciones = [
        {
            id: 1,
            img: "/logo-hc.avif",
            title: "Científico Humanista",
            animation: "scroll-items-left",
            text: "Formación integral que combina conocimientos científicos y humanísticos. Desarrolla pensamiento crítico, habilidades de investigación y competencias comunicativas para continuar estudios universitarios en diversas áreas del conocimiento.",
            href: "/hc",
            alt: "Logo de la especialización/formación : Científico Humanista(HC)"
        },
        {
            id: 2,
            img: "/logo-administracion.avif",
            title: "Administración",
            animation: "scroll-items-left",
            text: "Especialización enfocada en gestión empresarial, contabilidad y recursos humanos. Prepara para liderar organizaciones, manejar finanzas y desarrollar habilidades emprendedoras en el mundo de los negocios.",
            href: "/administracion",
            alt: "Logo de la especialización/formación : Administración"               
        },
        {
            id: 3,
            img: "/logo-agropecuaria.avif",
            title: "Agropecuaria",
            animation: "scroll-items-right",
            text: "Formación técnica en producción agrícola y ganadera. Desarrolla competencias en manejo de cultivos, crianza de animales, tecnologías sustentables y gestión de recursos naturales para el sector agroalimentario.",
            href: "/agropecuaria",
            alt: "Logo de la especialización/formación : Agropecuaria"
        },
        {
            id: 4,
            img: "/logo-programacion.avif",
            title: "Programación",
            animation: "scroll-items-right",
            text: "Especialización en desarrollo de software y tecnologías digitales. Enseña programación, bases de datos, desarrollo web y aplicaciones móviles, preparando para la industria tecnológica del futuro.",
            href: "/programacion",
            alt: "Logo de la especialización/formación : Programación"
        }
    ]

    return(
        <>
            <div className='flex h-20'>
                <h1 className='mx-auto my-auto font-bold md:text-4xl text-2xl dark:text-white text-white'>¿No sabes qué estudiar?</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-20' id='especializaciones' >
                {
                    especializaciones.map((e, i) =>(
                        <>
                            <div key={i} className={`  bg-gradient-to-b from-[#249382] mx-auto opacity-0 skew-1 group transition-all duration-300 hover:skew-0 w-80 h-96 my-20 rounded-xl shadow-2xl hover:shadow-theme-old-green-medium hover:shadow-md
                                ${hovered !== null && hovered !== i ? ' brightness-50 blur-sm' : ''} ${isMobile ? 'opacity-100' : e.animation} scroll-item dark:text-white text-white hover:scale-105`}
                                onMouseEnter={() => setIsHovered(i)}
                                onMouseLeave={() => setIsHovered(null)}
                            >
                                <div key={i} className='bg-gradient-to-t from-blue-900/30 to-[#249382] group-hover:rotate-4 mx-auto absolute -z-10 duration-300 hover:skew-0 w-80 h-96 rounded-xl '></div>

                                <div className='flex-col text-center mt-10 p-4'>
                                    <div className='relative justify-center w-30'>
                                        <img src={e.img} className='absolute w-30 h-30 rounded-full left-22 -top-30 bg-[#249382] p-1' alt={e.alt} />
                                    </div>
                                    <h1 className='font-bold my-5'>{e.title}</h1>
                                    <p>{e.text}</p>
                                    <a href={e.href}>
                                        <button name="especializacion" className='shadow-md active:translate-y-2 shadow-green-600 hover:shadow-[#249382] hover:scale-105  cursor-pointer p-4 mt-5 rounded-xl w-32'>
                                            Ver más
                                        </button>
                                    </a>
                                </div>

                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}
