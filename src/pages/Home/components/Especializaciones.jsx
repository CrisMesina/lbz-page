import React from 'react'

export const Especializaciones = () => {

    const especializaciones = [
        {
            id: 1,
            img: "/Logo.png",
            title: "Cientifico Humanista",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quibusdam dolor! Inventore itaque nostrum magnam nam doloremque ex veritatis perspiciatis impedit harum! Architecto doloribus delectus quis, facere nostrum labore provident!",
            href: "/"
        },
        {
            id: 2,
            img: "/Logo.png",
            title: "Adminstracion",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quibusdam dolor! Inventore itaque nostrum magnam nam doloremque ex veritatis perspiciatis impedit harum! Architecto doloribus delectus quis, facere nostrum labore provident!",
            href: "/"               
        },
        {
            id: 3,
            img: "/Logo.png",
            title: "Agropecuaria",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quibusdam dolor! Inventore itaque nostrum magnam nam doloremque ex veritatis perspiciatis impedit harum! Architecto doloribus delectus quis, facere nostrum labore provident!",
            href: "/"
        },
        {
            id: 4,
            img: "/Logo.png",
            title: "Programacion",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quibusdam dolor! Inventore itaque nostrum magnam nam doloremque ex veritatis perspiciatis impedit harum! Architecto doloribus delectus quis, facere nostrum labore provident!",
            href: "/"
        }
    ]

    return(
        <>
            <div className='flex h-20 border bg-black'>
                <h1 className='mx-auto my-auto font-bold text-4xl text-white'>Desde 2do medio puedes escoger</h1>
            </div>
            <div className='flex flex-wrap my-20'>
                {
                    especializaciones.map((e, i) =>(
                        <div className='mx-auto border w-80 h-96 mt-20 rounded-xl'>
                            <div className='relative'>
                                <img src={e.img} className='absolute w-30 h-30 rounded-full left-25 -bottom-10' alt="imagen de prueba" />
                            </div>
                            <div className='flex-col text-center mt-10 p-4'>
                                <h1 className='font-bold my-5'>{e.title}</h1>
                                <p>{e.text}</p>
                                <a href="/">
                                    <button className='border p-4 mt-5 rounded-xl w-32'>
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
