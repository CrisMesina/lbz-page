import React, { useEffect, useState } from 'react'


export const Noticias = () => {

    const [noticia, setNoticia] = useState([]);



    useEffect(() => {
        fetch('http://localhost:3000/noticias')
            .then(response => response.json())
            .then(data => {
                setNoticia(data);
            })
    }, [])

    return (
        <div className='grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 w-full mx-auto'>
            {noticia.map((n, i)=> (
                <div key={i} className='flex p-5 bg-green-950 w-96 rounded-lg my-10 mx-auto'> 
                    <div className='w-full mx-auto'>
                        <div className='text-end italic md:my-1'>
                            <p>{n.fecha}</p>
                        </div>
                        <div>
                            <img src={`http://localhost:3000${n.imagen}`} className='w-full h-60 object-cover rounded-xl' alt={`Imagen de la noticia: ${n.title}`} />
                        </div>
                        <h1 className='text-xl text-center font-bold p-3 text-white'>{n.title}</h1>
                        <p className='p-2 text-md text-center my-5 justify-between text-white'>
                            {n.txtMuestra}
                        </p>
                        <div>    
                            <a href={`noticias/${n.id}`} >
                                <button name="leer-mas-noticia" className='flex justify-center items-center border mx-auto p-2 w-32' >
                                    Leer más
                                </button>
                            </a>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
