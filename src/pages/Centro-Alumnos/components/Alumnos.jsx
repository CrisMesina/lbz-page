import React from 'react'

export const Alumnos = () => {

    const listado = [
        {
            id: 1,
            image: "/ProfesorAsesor1.avif", 
            name: "Karen Reyes",
            alt: "Imagen de nuestro centro de alumnos, actualmente tenemos como presidente a: '' " 
        },
        {
            id: 2,
            image: "/ProfesorAsesor2.avif",
            name: "Gerardo Fuenzalida",
            alt: "Imagen de nuestro centro de alumnos, actualmente tenemos como presidente a: '' " 
        }
    ]

    return (
        <>
            <h1 className='text-center font-bold text-4xl text-white' id="alumnos">Profesores Asesores</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-5 text-white'>
                    {listado.map((a, i) =>(
                        <div key={i} className='w-60 skew-1 text-white shadow-lg active:shadow-green-600 bg-gradient-to-b from-theme-blue hover:scale-105 to-[#249382] mx-auto my-5 rounded-t-2xl rounded-b-2xl text-center'>
                            <div>
                                <img src={a.image.length < 2 ? '/default-profile.avif' : a.image} alt={a.alt} className='rounded-t-2xl p-2 w-60 h-60 bg-[#249382] hover:scale-110' />
                            </div>
                            <div className='p-5 my-5'>
                                <h1>{a.name}</h1>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}
