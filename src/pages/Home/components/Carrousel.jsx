import React, { useEffect, useState } from 'react'

export const Carrousel = () => {

    const imgStorage = [
        {
            id: 1,
            img: "/hero1-min.JPG",
            title: "Especialidad Agropecuaria",
            subtitle: "Preparate para los nuevos desafios",
            extra: "Te esperamos",
            animation:"show-element",
            href: "/"
        },
        {
            id: 2,
            img: "hero2-min.JPG",
            title: "Especialidad Agropecuaria",
            subtitle: "Preparate para los nuevos desafios",
            extra: "Te esperamos",
            animation:"show-element",
            href: "/"
        },
        {
            id: 3,
            img: "/hero3-min.JPG",
            title: "Especialidad Agropecuaria",
            subtitle: "Preparate para los nuevos desafios",
            extra: "Te esperamos",
            animation:"show-element",
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
                                <div>
                                    <img src={s.img} key={i} className={`object-cover  h-screen w-full`} alt="" />
                                    <div className='absolute left-1/20 top-1/4 p-8'>
                                        <h1 className='text-3xl drop-shadow-title-text text-start my-10 font-bold  text-theme-old-green-dark text-shadow-lg tracking-wide'
                                        >
                                            {s.title}
                                        </h1>
                                        <h5 className='text-6xl font-bold text-theme-old-green-light drop-shadow-title-text'>{s.subtitle}</h5>
                                        <p className='text-6xl font-bold text-theme-old-green-light drop-shadow-title-text'>{s.extra}</p>
                                        <a href={s.href} className=''>
                                            <button className='p-5 font-bold mt-20 bg-gradient-to-r from-theme-old-green-medium via-theme-old-green-dark to-theme-old-green-light text-white rounded-lg'>
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
