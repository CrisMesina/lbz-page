
export const  Contactos = () => {

    const contactos = [
        {
            id:1,
            name: "Juan Perez",
            img: "/utp.avif",
            email: "director@director.cl",
            cargo: "director",          
        },
        {
            id:2,
            name: "Juan Perez",
            img: "/director.avif",
            style: "lg:w-1/2",
            email: "director@director.cl",
            cargo: "director",
        },
        {
            id:3,
            name: "Institucion",
            img: "/Logo.png",
            email: "director@director.cl",
            cargo: "director",
            telefono: "+56912345678"
        },
  
    ]

    const cantidad = contactos.length;

    return(
        <>
            <div className='p-10'>
                <div className='w-full p-2 bg-gradient-to-r from-blue-950 to-theme-blue-bg h-14 rounded-lg shadow-md shadow-blue-700'></div>
                <div className='w-full mt-10'>
                    <div className='grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-blue-950 to-theme-blue-bg rounded-lg shadow-md shadow-blue-700'>
                        {contactos.map((c, i)=>(
                            <div className='relative mx-auto w-80 rounded-xl my-20 h-96 shadow-lg shadow-theme-old-green-light'>{/* Contenedor Principal */}
                                <div className='h-1/2 rounded-t-xl bg-gradient-to-t from-green-950 via-green-700 to-theme-old-green-nav'></div>{/* Fondo Superior */}
                                    <div className='bottom-1/4 bg-white w-80 left-1 absolute'> {/* Informacion Contacto */}
                                        <div className='relative rounded-full'>
                                            <img src={`${c.img.length < 2 ? "/default-profile.avif" : c.img}`} className='rounded-full object-cover hover:scale-105 z-1 bg-white p-2 absolute w-25 bottom-13 h-25 left-1/3'  alt="" />
                                        </div>
                                    </div>
                                    <div className='relative h-1/2 bg-white rounded-b-xl'> {/* Fondo Inferior */}
                                        <div className='flex flex-col'>
                                            <h1 className='text-center mt-13 font-theme-zalando'>{c.name}</h1>
                                            <h2 className='text-center mt-2 font-theme-caveat'>{c.cargo}</h2>
                                            <div className={`grid  ${c.telefono ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                                <a href={`tel:${c.telefono}`} className='flex p-2 w-auto mx-auto'>
                                                    <button 
                                                        className='mx-auto flex shadow-lg p-4 rounded-xl cursor-pointer hover:scale-105 hover:shadow-blue-950' title={`Enviar correo a ${c.name}`} >
                                                        <img src="/email-icon.svg" className='w-6 h-6 inline mx-2' alt="" />
                                                        Correo
                                                    </button>
                                                </a>
                                                {c.telefono &&(
                                                    <a href={`tel:${c.telefono}`} className='flex p-2 w-auto mx-auto'>
                                                        <button
                                                            className='mx-auto flex shadow-lg p-4 rounded-xl cursor-pointer hover:scale-105 hover:shadow-blue-950' title={`Llamar a ${c.name}`}>
                                                            <img src="/phone-call.svg" className='w-6 h-6 inline mx-2' alt="" />
                                                            Llamar
                                                        </button>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        
                                </div>
                            </div>    
                        ))}
                    </div>
                </div>
            <div className='w-full p-2 bg-gradient-to-r from-blue-950 to-theme-blue-bg h-14 rounded-lg mt-10 shadow-md shadow-blue-700'></div>

            </div>
        </>
    )
}
