import React from 'react'

export const Footer = () => {

    const directorios = [
        {
            label: "Nosotros",
            href: "/nosotros"
        },
        {
            label :"Contáctanos",
            href: "/contactanos"
        },
        {
            label: "Directiva",
            href: "/nosotros",
        },
        {
            label: "Documentos",
            href: "/documentos  "
        }
    ]

    return(
        <>
            <footer>
                <div className='grid md:grid-cols-3 grid-cols-1 bg-linear-to-b from-[#249382]/10 to-theme-blue text-white text-center h-auto justify-center items-center'>
                    <div className='flex h-full'>
                        <img src="/Logo.png" className='object-contain w-32' alt="Logo de la institución" />
                        <div className='flex p-3 flex-col text-start mx-5'>
                            <h1 className='mt-4 font-bold text-lg'>Redes Sociales</h1>
                            <a href="https://www.instagram.com/bertazamoranolizana" target='_blank' className='mt-10 underline-animate' title='Ir a Instagram'>Instagram</a>
                            <a href="https://www.facebook.com/bertazamoranoc40" target='_blank' className='mt-10 underline-animate' title='Ir a Facebook'>Facebook</a>
                            <a href="https://www.youtube.com/@liceopolitecnicoc-40bertaz40" target='_blank' className='mt-10 underline-animate' title='Ir a Youtube'>Youtube</a>
                        </div>
                    </div>
                    <div className='flex h-full'>
                        <div className='flex p-3 flex-col text-center mx-auto'>
                            <h1 className='mt-4 font-bold text-lg'>Contáctanos</h1>
                            <div className='p-4 text-start'>
                                <p className='mt-8 italic'>Republica de Chile N°233 Coltauco-Chile</p>
                                <p className='mt-8 italic'>Secretaria: +56722451739</p>
                                <p className='mt-8 italic'>Inspectoria: +56722452430</p>
                                <p className='mt-8 italic'>liceobzl@daemcoltauco.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex h-full'>
                        <div className='flex p-3 flex-col text-center mx-auto'>
                            <h1 className='mt-4 font-bold text-lg'>
                                Directorios
                            </h1>
                            <div className='p-4'>
                                <div className='grid grid-cols-2'>
                                    {
                                        directorios.map((d, i) =>(
                                            <a href={d.href}  className='mt-5 text-start  mx-5 italic underline-animate' key={i}>{d.label}</a>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div> 
            </footer>
        </>
    )
}
