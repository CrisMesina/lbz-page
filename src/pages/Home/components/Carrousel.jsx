import React, { useEffect, useState } from 'react'

export const Carrousel = () => {

    const imgStorage = [
        {
            id: 1,
            img: "/hero1-min.avif",
            title: "Especialidad Agropecuaria",
            subtitle: "Preparate para los nuevos desafios",
            extra: "Te esperamos",
            href: "/"
        },
        {
            id: 2,
            img: "hero2-min.avif",
            title: "Especialidad Programación",
            subtitle: "Preparate para los nuevos desafios",
            extra: "Te esperamos",
            href: "/"
        },
        {
            id: 3,
            img: "/hero3-min.avif",
            title: "Especialidad Administración",
            subtitle: "Preparate para los nuevos desafios",
            extra: "Te esperamos",
            href: "/"
        }
    ]

    const [imgActual, setImgActual] = useState(0);

    const cantidad = imgStorage.length;


    useEffect(() =>{
        const intervalo = setInterval(()=>{
            setImgActual(prev => prev === cantidad - 1 ? 0 : prev + 1);
        },4000)
        return() => clearInterval(intervalo)
    }, [cantidad])

    if(!Array.isArray(imgStorage) || cantidad === 0 ) return;



    return(
        <>
            {
                imgStorage.map((s, i) =>{
                    return(
                        <div>
                            {imgActual === i && (
                                <div className=''>
                                    <img src={s.img} key={i} className={`object-cover  h-screen w-full`} alt="Imagen de la entrada principal de la institucion. Con nuestros coordinadores y nuestro director." />
                                    <div className='absolute left-1/20 top-1/4 p-8'>
                                        <h1 className='text-3xl font-theme-caveat drop-shadow-title-text animation-show-left text-start my-10 font-bold  text-theme-old-green-dark text-shadow-lg tracking-wide'
                                        >
                                            {s.title}
                                        </h1>
                                        <h5 className='text-6xl font-theme-chela font-bold animation-show-left text-theme-old-green-light drop-shadow-title-text'>{s.subtitle}</h5>
                                        <p className='text-6xl font-theme-chela font-bold animation-show-left text-theme-old-green-light drop-shadow-title-text'>{s.extra}</p>
                                        <a href={s.href} className=''>
                                            <button className='p-5 animation-show-items font-bold mt-20 bg-gradient-to-r from-theme-old-green-medium via-theme-old-green-dark to-theme-old-green-light text-white rounded-lg'>
                                                Mas Información
                                            </button>
                                        </a>
                                        
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })
            }
        </>
    )
}
