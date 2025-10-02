import React, {  useEffect, useRef, useState } from 'react'




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
    const [resMenu, setResMenu] = useState(null);

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
            label: "Cuenta 🔽",
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
            <div className='grid md:grid-cols-3 grid-cols-2 h-20 bg-white shadow-lg'>
                <div className=' text-mint relative'>
                    <a href="/">
                        <img src="/Logo.png" className='absolute left-1/7 top-0 shadow-lg w-30 h-30 bg-white rounded-b-2xl p-3' alt="Logo del la institucion Liceo Berta Zamorano Lizana. Está ubicado en Coltauco, es un liceo Publico el cual acepta a todo tipo de gente. Se incorporó la especializacion de Programación" /> 
                    </a>
                </div>

                <div className='md:flex md:flex-wrap hidden my-auto ' ref={dropDownRef}>
                    {navs.map((n, i) =>(
                       <div key={i} className={` flex mx-auto items-center justify-center h-20`}>
                            {n.options ? (
                                <div>
                                    <button
                                        className='underline-animate text-black cursor-pointer'
                                        onClick={() => setOpenDropdown(openDropDown === i ? null: i)}>
                                            {n.label}
                                    </button>
                                    {openDropDown === i && (
                                        <div className='absolute bg-white text-black p-2 shadow-lg shadow-theme-old-green-nav'>
                                            {n.options.map((opt, i) =>(
                                                <a 
                                                    key={i}
                                                    href={opt.href}
                                                    className='flex text-black underline-animate my-2 p-2'
                                                >
                                                    {opt.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a 
                                    className='underline-animate text-black'
                                    href={n.href}>{n.label}</a>
                            )}
                       </div>
                    ))}

                </div>

                <div ref={menuRef} className='md:flex md:flex-wrap hidden my-auto items-end justify-end mx-auto rounded-md'>
                    <div>
                        {cuenta.map((c, i) =>(
                            <div className=''>
                                <button
                                    className='w-36 text-black  font-bold'
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
                                                className='flex my-2 p-2 text-black underline-animate'
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

                <div className='block md:hidden my-auto items-end justify-end mx-auto rounded-md text-black dark:text-white'>
                    <div>
                        <button
                            className='p-4 w-36 text-white font-bold'
                            onClick={()=> setResMenu(resMenu === true ? false: true)}>
                                Menu
                        </button>
                        {resMenu === true && (
                            <div className='absolute bg-white p-2 shadow-lg shadow-theme-old-green-nav' ref={dropDownRef}>
                                {navs.map((n,i) =>(
                                    <div className='my-2' key={i}>
                                        {n.options ? (
                                            <div className='' >
                                                <button
                                                    className='underline-animate text-black cursor-pointer'
                                                    onClick={() => setOpenDropdown(openDropDown === i ? null: i)}>
                                                        {n.label}
                                                </button>
                                            </div>
                                            
                                        ) : (
                                            <a 
                                                className='underline-animate text-black '
                                                href={n.href}>
                                                    {n.label}
                                            </a>
                                        )}
                                        {openDropDown === i && (
                                                <div className='bg-white p-1 '>
                                                    {n.options.map((opt, i) =>(
                                                        <a
                                                            key={i}
                                                            href={opt.href}
                                                            className='flex text-black underline-animate p-2'
                                                        >
                                                        {opt.label}
                                                        </a>

                                                    ))}
                                                </div>
                                            )}

                                        
                                    </div>
                                ))}
                                {cuenta.map((c, i) =>(
                                    <div className='my-2' key={i}>
                                        <button 
                                            className='underline-animate text-black cursor-pointer' 
                                            onClick={()=> setOpenMenu(openMenu === i ? null: i)}
                                        >
                                            {c.label}
                                        </button>
                                        {openMenu === i && (
                                            <div className='bg-white text-black p-1'>
                                                {c.options.map((opt, i) =>(
                                                    <a
                                                    key={i}
                                                    href={opt.href}
                                                    target={opt.blank}
                                                    className='flex underline-animate my-2 p-2'
                                                    >
                                                        {opt.label}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </>
    )
}
