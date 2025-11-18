import React from 'react'

export const Padres = () => {

    const listado = [
        {
            id: 1,
            image: "/cp_presidente.avif",
            name: "Claudia Piro",
            cargo: "Presidenta"
        },
        {
            id: 2,
            image: "/cp_secretaria.avif",
            name: "Pamela Acuña",
            cargo: "Secretaria"
        },
        {
            id: 3,
            image: "/cp_tesorera.avif",
            name: "Francisca Morales",
            cargo: "Tesorera"
        },
        {
            id: 4,
            image: "/cp_primera_directora.avif",
            name: "Marlene Filgueira",
            cargo: "Primera Directora"
        },
        {
            id: 5,
            image: "/cp_segunda_directora.avif",
            name: "Maria Zuñiga",
            cargo: "Segunda Directora"
        }
    ]

    return (
        <>
            <h1 className='text-center font-bold text-4xl' id='padres'>¿Quiénes forman parte del centro de Padres?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5'>
                    {listado.map((a, i) =>(
                        <div key={i} className='w-60 skew-1 hover:scale-105 shadow-lg active:shadow-green-600 mx-auto my-5 rounded-t-2xl bg-gradient-to-b from-theme-blue to-[#249382] rounded-b-2xl text-center'>
                            <div>
                                <img src={a.image.length < 2 ? '/default-profile.avif' : a.image} alt="Imagen de la persona que está encargada de su cargo (Presidente, tesorera, etc)" 
                                    className='rounded-t-2xl hover:scale-110 transition-all duration-300 rendering w-60 h-60 bg-[#249382] p-2' />
                            </div>
                            <div className='p-5'>
                                <h1 className='mt-2 mb-5'>{a.name}</h1>
                                <p>{a.cargo}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}
