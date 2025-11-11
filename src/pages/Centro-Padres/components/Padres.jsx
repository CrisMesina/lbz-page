import React from 'react'

export const Padres = () => {

    const listado = [
        {
            id: 1,
            image: "/", // Ubicacion de imagenes -> /src/imgs/
            name: "Juan Perez",
            cargo: "presidente"
        },
        {
            id: 2,
            image: "/", // Ubicacion de imagenes -> /src/imgs/
            name: "Juan Perez",
            cargo: "presidente"
        },
        {
            id: 3,
            image: "/", // Ubicacion de imagenes -> /src/imgs/
            name: "Juan Perez",
            cargo: "presidente"
        },
        {
            id: 4,
            image: "/", // Ubicacion de imagenes -> /src/imgs/
            name: "Juan Perez",
            cargo: "presidente"
        },
    ]

    return (
        <>
            <h1 className='text-center font-bold text-4xl' id='padres'>¿Quiénes forman parte del centro de Padres?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5'>
                    {listado.map((a, i) =>(
                        <div key={i} className='w-60 skew-1 hover:scale-105 shadow-lg active:shadow-green-600 mx-auto my-5 rounded-t-2xl bg-gradient-to-b from-theme-blue to-[#249382] rounded-b-2xl text-center'>
                            <div>
                                <img src={a.image.length < 2 ? '/src/imgs/default-profile.avif' : a.image} alt="Imagen de la persona que está encargada de su cargo (Presidente, tesorera, etc)" 
                                    className='rounded-t-2xl hover:scale-110 transition-all duration-300 rendering w-60 h-60 bg-[#249382] p-2' />
                            </div>
                            <div className='p-5'>
                                <h1>{a.name}</h1>
                                <p>{a.cargo}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}
