import React from 'react'

export const    Contactos = () => {

    const contactos = [
        {
            id:1,
            name: "Juan Perez",
            img: "/tea3.avif",
            email: "director@director.cl",
            cargo: "director"
        },
                {
            id:2,
            name: "Juan Perez",
            img: "/tea3.jpg",
            style: "lg:w-1/2",
            email: "director@director.cl",
            cargo: "director"
        },
        {
            id:3,
            name: "Juan Perez",
            img: "/tea3.jpg",
            email: "director@director.cl",
            cargo: "director",
        },
  
    ]

    const cantidad = contactos.length;

    return(
        <>
            <div className='flex flex-col p-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                    {contactos.map((c, i)=>(
                        <div className='flex hover:-translate-y-5'>
                            <div className='relative my-5 mx-10 w-80 rounded-xl h-96 shadow-lg'>{/* Contenedor Principal */}
                                <div className='h-1/2 rounded-t-xl bg-gradient-to-r from-theme-old-green via-theme-mint to-theme-old-green-nav'>
                                </div>{/* Fondo Superior */}
                                    <div className='bottom-1/4 bg-white w-80 left-1 absolute'> {/* Informacion Contacto */}
                                        <div className='relative rounded-full'>
                                            <img src="/tea3.avif" className='rounded-full hover:scale-105 z-1 bg-white p-2 absolute w-25 bottom-13 h-25 left-1/3' alt="" />
                                        </div>
                                    </div>
                                    <div className='relative h-1/2 bg-white rounded-b-xl'> {/* Fondo Inferior */}
                                    <div className='flex flex-col'>
                                        <h1 className='text-center mt-13 font-theme-zalando'>{c.name}</h1>
                                        <h2 className='text-center mt-2 font-theme-caveat'>{c.cargo}</h2>
                                        <a href={`mailto:${c.email}`} className='flex p-2 w-32 mx-auto'>
                                            <button 
                                                className='mx-auto shadow-lg p-4 rounded-xl cursor-pointer hover:scale-105 hover:shadow-blue-950' title={`Contactar a: ${c.name}`}>
                                                Contactar
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
