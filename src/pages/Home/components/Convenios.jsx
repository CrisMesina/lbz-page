import React from 'react'

export const Convenios = () => {


    const conv = [
        {
            id: 1,
            href: "#",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyDGHefQfSb_12AsROBcwtbHFG4-G-Nq_wliEjbBVfD_nzY7U5DYtPY2kV5XPoOaVwcg&usqp=CAU",
            alt: "Imagen de muestra con el logo de la institucion con la que tenemos el convenio: INACAP"
        },
        {
            id: 2,
            href: "#",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBHeebItLMu5vA37c-tT_SjcBfbBS5grffg&s",
            alt: "Imagen de muestra con el logo de la institucion con la que tenemos el convenio: INACAP"
        },
        {
            id: 3,
            href: "#",
            img: "https://ucampus.uoh.cl/d/imglocal/favicon/android-chrome-512x512.png",
            alt: "Imagen de muestra con el logo de la institucion con la que tenemos el convenio: INACAP"
        },
        {
            id: 4,
            href: "#",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyDGHefQfSb_12AsROBcwtbHFG4-G-Nq_wliEjbBVfD_nzY7U5DYtPY2kV5XPoOaVwcg&usqp=CAU",
            alt: "Imagen de muestra con el logo de la institucion con la que tenemos el convenio: UOH"
        },
        {
            id: 5,
            href: "#",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBHeebItLMu5vA37c-tT_SjcBfbBS5grffg&s",
            alt: "Imagen de muestra con el logo de la institucion con la que tenemos el convenio: UOH"
        },
        {
            id: 6,
            href: "#",
            img: "https://ucampus.uoh.cl/d/imglocal/favicon/android-chrome-512x512.png",
            alt: "Imagen de muestra con el logo de la institucion con la que tenemos el convenio: UOH"
        },


    ]

    return (
        <>
            <h1 className='text-center font-bold text-white my-15 text-5xl scroll-items-down'>Convenios</h1>
            <div className='carousel scroll-items-left'>
                {
                    conv.map((c, i) =>(
                        <div className='grupo'>
                            <div className='carta bg-white'>
                                <a href={c.href}>
                                    <img src={c.img} alt={c.alt} className='w-full h-full object-contain'/>
                                </a>
                            </div>
                        </div>
                    ))
                }
                {
                    conv.map((c, i) =>(
                        <div className='grupo' >
                            <div className='carta'>
                                <a href={c.href}>
                                    <img src={c.img} alt={c.alt} className='w-full h-full object-contain'/>
                                </a>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </>
    )
}
