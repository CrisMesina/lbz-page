import React, { useState } from 'react'

export const Especializaciones = () => {


    const [hovered, setIsHovered] = useState(null);


    const especializaciones = [
        {
            id: 1,
            img: "/Logo.png",
            title: "Cientifico Humanista",
            animation: "scroll-items-left",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quibusdam dolor! Inventore itaque nostrum magnam nam doloremque ex veritatis perspiciatis impedit harum! Architecto doloribus delectus quis, facere nostrum labore provident!",
            href: "/hc",
            alt: "Logo de la especializacion/formacion : Cientifico Humanista(HC)"
        },
        {
            id: 2,
            img: "/Logo.png",
            title: "Administracion",
            animation: "scroll-items-left",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quibusdam dolor! Inventore itaque nostrum magnam nam doloremque ex veritatis perspiciatis impedit harum! Architecto doloribus delectus quis, facere nostrum labore provident!",
            href: "/administracion",
            alt: "Logo de la especializacion/formacion : Administracion "               
        },
        {
            id: 3,
            img: "/Logo.png",
            title: "Agropecuaria",
            animation: "scroll-item-right",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quibusdam dolor! Inventore itaque nostrum magnam nam doloremque ex veritatis perspiciatis impedit harum! Architecto doloribus delectus quis, facere nostrum labore provident!",
            href: "/agropecuaria",
            alt: "Logo de la especializacion/formacion : Agropecuaria"
        },
        {
            id: 4,
            img: "/Logo.png",
            title: "Programacion",
            animation: "scroll-item-right",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quibusdam dolor! Inventore itaque nostrum magnam nam doloremque ex veritatis perspiciatis impedit harum! Architecto doloribus delectus quis, facere nostrum labore provident!",
            href: "/programacion",
            alt: "Logo de la especializacion/formacion : Programacion"
        }
    ]

    return(
        <>
            <div className='flex h-20'>
                <h1 className='mx-auto my-auto font-bold md:text-4xl text-2xl text-white'>¿No sabes que estudiar?</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-20' >
                {
                    especializaciones.map((e, i) =>(
                        <div key={i} className={` bg-white mx-auto w-80 h-96 my-20 rounded-xl shadow-2xl hover:shadow-theme-old-green-medium hover:shadow-md hover:scale-110
                            ${hovered !== null && hovered !== i ? ' brightness-50 blur-sm' : ''} ${e.animation} scroll-item `}
                            onMouseEnter={() => setIsHovered(i)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            
                            <div className='flex-col text-center mt-10 p-4'>
                                <div className='relative justify-center'>
                                    <img src={e.img} className='absolute w-30 h-30 rounded-full shadow-lg shadow-theme-old-green-dark left-22 -top-30 border' alt="imagen de prueba" />
                                </div>
                                <h1 className='font-bold my-5'>{e.title}</h1>
                                <p>{e.text}</p>
                                <a href={e.href}>
                                    <button className='shadow-2xl shadow-gray-400 hover:shadow-gray-600 hover:scale-105  cursor-pointer p-4 mt-5 rounded-xl w-32'>
                                        Ver mas
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
