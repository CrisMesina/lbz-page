import React from 'react'

export const Convenios = () => {


    const conv = [
        {
            id: 1,
            href: "#",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyDGHefQfSb_12AsROBcwtbHFG4-G-Nq_wliEjbBVfD_nzY7U5DYtPY2kV5XPoOaVwcg&usqp=CAU",
        },
        {
            id: 2,
            href: "#",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBHeebItLMu5vA37c-tT_SjcBfbBS5grffg&s",
        },
        {
            id: 3,
            href: "#",
            img: "https://ucampus.uoh.cl/d/imglocal/favicon/android-chrome-512x512.png",
        },
        {
            id: 1,
            href: "#",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyDGHefQfSb_12AsROBcwtbHFG4-G-Nq_wliEjbBVfD_nzY7U5DYtPY2kV5XPoOaVwcg&usqp=CAU",
        },
        {
            id: 2,
            href: "#",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBHeebItLMu5vA37c-tT_SjcBfbBS5grffg&s",
        },
        {
            id: 3,
            href: "#",
            img: "https://ucampus.uoh.cl/d/imglocal/favicon/android-chrome-512x512.png",
        },


    ]

    return (
        <>
            <h1 className='text-center font-bold text-5xl'>Convenios</h1>
            <div className='carousel basic'>
                {
                    conv.map((c, i) =>(
                        <div className='grupo'>
                            <div className='carta'>
                                <a href={c.href}>
                                    <img src={c.img} alt={c.name} className='w-full h-full object-contain'/>
                                </a>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </>
    )
}
