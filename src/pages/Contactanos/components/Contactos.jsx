import React from 'react'

export const Contactos = () => {

    const contactos = [
        {
            id:1,
            name: "Juan Perez",
            img: "/tea3.avif",
            style: "w-3/6",
            email: "director@director.cl",
            cargo: "director"
        },
                {
            id:2,
            name: "Juan Perez",
            img: "/tea3.jpg",
            style: "w-3/6",
            container: "ml-180",
            email: "director@director.cl",
            cargo: "director"
        },
        {
            id:3,
            name: "Juan Perez",
            img: "/tea3.jpg",
            style: "w-3/6",
            email: "director@director.cl",
            cargo: "director",
        },
  
    ]

    const cantidad = contactos.length;

    return(
        <>
            <div className='p-5'>
                {contactos.map((c, i) =>(
                    <div key={i} 
                        className={` my-4 scroll-item  rounded-2xl bg-conic/[from_var(--border-angle)] p-1  animate-rotate-border from-theme-old-green-medium via-green-300 to-green-900
                            shadow-lg ${c.style} ${c.container} `}
                        >
                        <div className='flex bg-white rounded-2xl'>
                            <div>
                                <img src={c.img} className={`w-46 ${c.style} shadow-lg shadow-theme-old-green-medium hover:shadow-theme-old-green-light hover:scale-110 rounded-tl-2xl rounded-bl-2xl `} alt="" />
                            </div>
                            <div className='grid grid-cols-2 w-full'>
                                <div className=''>
                                    <h1 className=' mx-5 mt-5 text-3xl'>{c.name}</h1>
                                    <p className=' mx-5 mt-5'>
                                        <a href={`mailto:${c.email}`} className='underline-animate text-xl'>
                                            {c.email}
                                        </a>
                                    </p>
                                    <p className=' mx-5 mt-5 italic font-bold'>{c.cargo}</p>
                                </div>
                                <div className='flex mx-auto text-center w-32 my-auto shadow-lg shadow-theme-old-green-medium
                                    hover:scale-110 hover:shadow-theme-old-green-light rounded-lg'>
                                        
                                    <button className='text-center h-20 mx-auto'>Contactar</button>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}
