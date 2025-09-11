import React, { useState } from 'react'
import { BsInstagram } from 'react-icons/bs'
import {  } from 'react-icons/fa'


export const Nav = () => {

    const [openDropDown, setOpenDropdown] = useState(null);

    const navs = [
        {
            label: "Liceo ↓",
            options : [
                {
                    label: "Nosotros",
                    href: "/nosotros"
                },
                {
                    label: "Documentos",
                    href: "/documentos"
                }
            ]
        },
        {
            label: "Comunidad",
            options: [
                {
                    label : "Centro de Alumnos",
                    href: "/centro-alumnos"
                },
                {
                    label: "Centro de Padres",
                    href: "/centro-padres"
                },
                {
                    label: "Redes Sociales",
                    href: "/redes-sociales"
                },
                {
                    label: "Noticias",
                    href: "/noticias"
                }
            ]
        },
        {
            label: "Contactenos",
            href: "/contactanos",
        },
    ]

    return(
        <> 
            <div className='grid grid-cols-3 h-20 bg-white shadow-lg'>
                <div className=' text-mint relative'>
                    <a href="/">
                        <img src="/Logo.png" className='absolute left-1/7 top-0 shadow-lg w-30 h-30 bg-white rounded-b-2xl p-3' alt="" /> 
                    </a>
                </div>

                <div className='flex flex-wrap my-auto'>
                    {navs.map((n, i) =>(
                       <div key={i} className={`mx-auto p-5 flex items-center justify-center h-20`}>
                            {n.options ? (
                                <div>
                                    <button
                                        onClick={() => setOpenDropdown(openDropDown === i ? null: i)}>
                                            {n.label}
                                    </button>
                                    {openDropDown === i && (
                                        <div className='absolute bg-white p-2 shadow-lg shadow-theme-old-green-nav'>
                                            {n.options.map((opt, i) =>(
                                                <a 
                                                    key={i}
                                                    href={opt.href}
                                                    className='flex border-b my-2 p-2'
                                                >
                                                    {opt.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a href={n.href}>{n.label}</a>
                            )}
                       </div>
                    ))}

                </div>

                <div className='flex flex-wrap my-auto items-end justify-end mx-auto rounded-md bg-gradient-to-r from-theme-old-green-medium via-theme-old-green-dark to-theme-old-green-light text-white font-extrabold'>
                    <a href="/mi-cuenta">
                        <button className='p-3 cursor-pointer'>
                            Mi cuenta
                        </button>
                    </a>
                </div>

            </div>
        </>
    )
}
