import React, { useState } from 'react'

export const Especializaciones = () => {


    const [hovered, setIsHovered] = useState(null);


    const especializaciones = [
        {
            id: 1,
            img: "/",
            title: "Cientifico Humanista",
            animation: "scroll-items-left",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quibusdam dolor! Inventore itaque nostrum magnam nam doloremque ex veritatis perspiciatis impedit harum! Architecto doloribus delectus quis, facere nostrum labore provident!",
            href: "/hc",
            alt: "Logo de la especializacion/formacion : Cientifico Humanista(HC)"
        },
        {
            id: 2,
            img: "/",
            title: "Administracion",
            animation: "scroll-items-left",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quibusdam dolor! Inventore itaque nostrum magnam nam doloremque ex veritatis perspiciatis impedit harum! Architecto doloribus delectus quis, facere nostrum labore provident!",
            href: "/administracion",
            alt: "Logo de la especializacion/formacion : Administracion "               
        },
        {
            id: 3,
            img: "/",
            title: "Agropecuaria",
            animation: "scroll-items-right",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quibusdam dolor! Inventore itaque nostrum magnam nam doloremque ex veritatis perspiciatis impedit harum! Architecto doloribus delectus quis, facere nostrum labore provident!",
            href: "/agropecuaria",
            alt: "Logo de la especializacion/formacion : Agropecuaria"
        },
        {
            id: 4,
            img: "/",
            title: "Programacion",
            animation: "scroll-items-right",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quibusdam dolor! Inventore itaque nostrum magnam nam doloremque ex veritatis perspiciatis impedit harum! Architecto doloribus delectus quis, facere nostrum labore provident!",
            href: "/programacion",
            alt: "Logo de la especializacion/formacion : Programacion"
        }
    ]

    return(
        <>
            <div className='flex h-20'>
                <h1 className='mx-auto my-auto font-bold md:text-4xl text-2xl dark:text-white text-black'>¿No sabes que estudiar?</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-20' >
                {
                    especializaciones.map((e, i) =>(
                        <div key={i} className={` bg-gradient-to-b from-[#249382] mx-auto opacity-0 skew-1 transition-all duration-300 hover:skew-0 w-80 h-96 my-20 rounded-xl shadow-2xl hover:shadow-theme-old-green-medium hover:shadow-md hover:scale-110
                            ${hovered !== null && hovered !== i ? ' brightness-50 blur-sm' : ''} ${e.animation} scroll-item dark:text-white text-black`}
                            onMouseEnter={() => setIsHovered(i)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            
                            <div className='flex-col text-center mt-10 p-4'>
                                <div className='relative justify-center w-30'>
                                    <img src={e.img} className='absolute w-30 h-30 rounded-full left-22 -top-30 bg-[#249382] p-1' />
                                </div>
                                <h1 className='font-bold my-5'>{e.title}</h1>
                                <p>{e.text}</p>
                                <a href={e.href}>
                                    <button className='shadow-md active:translate-y-2 shadow-green-600 hover:shadow-[#249382] hover:scale-105  cursor-pointer p-4 mt-5 rounded-xl w-32'>
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
