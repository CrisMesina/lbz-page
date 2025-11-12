import { useState } from 'react'

const navs = [
    {
        label: "Inicio",
        href: "/",
    },
    {
        label: "Liceo",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 36 36"><path fill="#000000" d="m33.71 17.29l-15-15a1 1 0 0 0-1.41 0l-15 15a1 1 0 0 0 1.41 1.41L18 4.41l14.29 14.3a1 1 0 0 0 1.41-1.41Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="#000000" d="M28 32h-5V22H13v10H8V18l-2 2v12a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76l-2-2Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>',
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


export const Navegador = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [expandedMenus, setExpandedMenus] = useState({});

    const toggleMenu = (menuKey) => {
        setExpandedMenus(prev => ({
            ...prev,
            [menuKey]: !prev[menuKey]
        }));
    };


    return (
        <>
            <div className='absolute'>
                <button 
                    name="menu-open"
                    className='p-4 py-2 text-white bg-black rounded-2xl fixed top-4 left-4 z-10'
                    onClick={() => setIsOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"/>
                    </svg>
                    
                </button>
                <a href="/" className='absolute left-25 top-7 text-white bg-black/60 p-2 rounded-xl font-bold underline-animate'>Inicio</a>
            </div>
            {/* RECORDAR: CON ESTE SE COLOCA EN NEGRO EL FONDO */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-20 transition-all duration-75 z-20"
                    onClick={() => setIsOpen(false)}
                />
            )}
            
            <div
                className={`fixed top-0 left-0 bg-theme-blue h-screen w-96 z-30 transition-transform duration-500 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <button 
                    name="menu-close"
                    className='p-2 text-white bg-black rounded-2xl absolute top-4 right-4'
                    onClick={() => setIsOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256">
                        <path fill="#8FC1A9" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/>
                    </svg>
                </button>
                <div>
                    <img src="/Logo.png" className='w-40 p-4 mx-auto' alt="Logo de la institución" />
                </div>
                <div className='mt-10'>
                    {navs.map((n, i) =>(
                        <div key={i} className=''>
                            {n.options ? (
                                <div className='border-b border-white/20'>
                                    <div 
                                        className='flex items-center justify-between px-6 py-4 text-white cursor-pointer hover:bg-white/10'
                                        onClick={() => toggleMenu(`nav-${i}`)}
                                    >
                                        <div className='flex items-center gap-2'>
                                            <span>{n.label}</span>
                                        </div>
                                        <span className={`transition-transform duration-300 ${expandedMenus[`nav-${i}`] ? 'rotate-45' : ''}`}>+</span>
                                    </div>
                                    {expandedMenus[`nav-${i}`] && (
                                        <div className='bg-white/10'>
                                            {n.options.map((o, j) => (
                                                <a 
                                                    key={j}
                                                    href={o.href} 
                                                    className='block px-12 py-3 text-white hover:bg-white/20'
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {o.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className='border-b border-white/20'>
                                    <a 
                                        href={n.href}
                                        className='block px-6 py-4 text-white hover:bg-white/10'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {n.label}
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                    {cuenta.map((c, k) => (
                        <div key={k} className='border-b border-white/20'>
                            <div 
                                className='flex items-center justify-between px-6 py-4 text-white cursor-pointer hover:bg-white/10'
                                onClick={() => toggleMenu(`cuenta-${k}`)}
                            >
                                <div className='flex items-center gap-2'>
                                    <span>{c.label}</span>
                                </div>
                                <span className={`transition-transform duration-300 ${expandedMenus[`cuenta-${k}`] ? 'rotate-45' : ''}`}>+</span>
                            </div>
                            {expandedMenus[`cuenta-${k}`] && (
                                <div className='bg-white/10'>
                                    {c.options.map((co, l) => (
                                        <a 
                                            key={l}
                                            href={co.href} 
                                            target={co.blank}
                                            className='block px-12 py-3 text-white hover:bg-white/20'
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {co.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
