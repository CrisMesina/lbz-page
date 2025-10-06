import React, { useEffect, useState } from 'react'

export const Carrousel = () => {

    const imgStorage = [
        {
            id: 1,
            img: "/hero1-min.avif",
        },
        {
            id: 2,
            img: "hero2-min.avif",
        },
        {
            id: 3,
            img: "/hero3-min.avif",
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
            <div className='flex'>
                <img src={imgStorage[imgActual].img}
                className={`brightness-50 lg:block hidden w-full h-full rounded-xl transition-all duration-500 ease-in-out`}
                alt="" />
            </div>
        </>
    )
}
