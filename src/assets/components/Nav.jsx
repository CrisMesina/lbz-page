import React, { useEffect, useRef, useState } from 'react'




export const Nav = () => {


    const dropDownRef = useRef();
    const menuRef = useRef();

    useEffect(()=>(
        function handleClickOutside(event){
            if(
                dropDownRef.current && !dropDownRef.current.contains(event.target) &&
                menuRef.current && !menuRef.current.contains(event.target)
            ){
                setOpenDropdown(null);
                setOpenMenu(null)
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }
    ), [])

    const [openDropDown, setOpenDropdown] = useState(null);
    const [openMenu, setOpenMenu] = useState(null);

    const navs = [
        {
            label: "Liceo 🔽",
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
            label: "Comunidad 🔽",
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

    const cuenta = [
        {
            id:1,
            label: "Cuenta",
            options: [
                {
                    label: "Estudiante",
                    href: "https://lms.lirmi.com/login",
                    blank: "_blank"
                },
                {
                    label: "Docente",
                    href: "https://login.lirmi.com/login",
                    blank: "_blank"
                }
            ]
        }
    ]

    return(
        <> 
            <div className='grid grid-cols-3 h-20 bg-white shadow-lg'>
                <div className=' text-mint relative'>
                    <a href="/">
                        <img src="/Logo.png" className='absolute left-1/7 top-0 shadow-lg w-30 h-30 bg-white rounded-b-2xl p-3' alt="" /> 
                    </a>
                </div>

                <div className='flex flex-wrap my-auto ' ref={dropDownRef}>
                    {navs.map((n, i) =>(
                       <div key={i} className={`mx-auto p-5 flex items-center justify-center h-20`}>
                            {n.options ? (
                                <div>
                                    <button
                                        className='underline-animate cursor-pointer'
                                        onClick={() => setOpenDropdown(openDropDown === i ? null: i)}>
                                            {n.label}
                                    </button>
                                    {openDropDown === i && (
                                        <div className='absolute bg-white p-2 shadow-lg shadow-theme-old-green-nav'>
                                            {n.options.map((opt, i) =>(
                                                <a 
                                                    key={i}
                                                    href={opt.href}
                                                    className='flex underline-animate my-2 p-2'
                                                >
                                                    {opt.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a 
                                    className='underline-animate'
                                    href={n.href}>{n.label}</a>
                            )}
                       </div>
                    ))}

                </div>

                <div ref={menuRef} className='flex flex-wrap my-auto items-end justify-end mx-auto rounded-md bg-gradient-to-r from-theme-old-green-medium via-theme-old-green-dark to-theme-old-green-light text-black '>
                    <div>
                        {cuenta.map((c, i) =>(
                            <div>
                                <button
                                    className='p-4 w-36 text-white font-bold'
                                    onClick={()=> setOpenMenu(openMenu === i ? null: i)}>
                                        {c.label}
                                </button>
                                {openMenu === i && (
                                    <div className='absolute bg-white p-2 shadow-lg shadow-theme-old-green-nav'>
                                        {c.options.map((opt, i) =>(
                                            <a 
                                                key={i}
                                                href={opt.href}
                                                target={opt.blank}
                                                className='flex my-2 p-2 underline-animate'
                                            >
                                                {opt.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>


                            
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}
