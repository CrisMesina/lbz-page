import React from 'react'

export const Contactos = () => {

    const contactos = [
        {
            id:1,
            name: "Juan Perez",
            img: "/tea3.avif",
            style: "",
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
            style: "",
            email: "director@director.cl",
            cargo: "director",
        },
  
    ]

    const cantidad = contactos.length;

    return(
        <>
            <div className='flex flex-col p-5'>
                {contactos.map((c, i) =>(
                    <div key={i} 
                        className={` my-4 relative mx-auto  rounded-2xl bg-conic/[from_var(--border-angle)] p-1 animate-rotate-border from-theme-old-green-medium via-green-300 to-green-900
                            shadow-lg ${c.style} `}
                        >
                        <div className='flex p-1 bg-white rounded-2xl'>
                            <div>
                                <img src={c.img} className={`w-46 shadow-lg shadow-theme-old-green-medium hover:shadow-theme-old-green-light hover:scale-110 rounded-tl-2xl rounded-bl-2xl `} alt="+Imagen de la persona con la que podran ponerse en contacto Ya sea el director de el liceo, la Jefa de UTP o el mismo liceo" />
                            </div>
                            <div className='grid grid-cols-2 w-full'>
                                <div className=''>
                                    <h1 className=' mx-5 md:mt-5 w-32 text-2xl font-bold'>{c.name}</h1>
                                    <p className=' mx-5'>
                                        <a href={`mailto:${c.email}`} className='underline-animate cursor-pointer text-xl'>
                                            {c.email}
                                        </a>
                                    </p>
                                    <p className=' mx-5 mt-5 italic font-bold'>{c.cargo}</p>
                                </div>
                                <div className='flex mt-20 text-center w-25 my-auto shadow-lg shadow-theme-old-green-medium
                                    hover:scale-110 hover:shadow-theme-old-green-light rounded-lg'>
                                        
                                    <a href={`mailto:${c.email}`}>
                                        <button className='mx-auto p-2 cursor-pointer'>Contactar</button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}
