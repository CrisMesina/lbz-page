import React from 'react'

export const MisionyVision = () => {
    return(
        <>
            <div className='flex flex-col md:flex-row text-white'>
                <div className='text-center mx-auto w-full h-96 p-2'>
                    <h1 className='text-5xl mt-4 lg:mt-20'>Misión</h1>
                    <p className=' mt-1 mb-2 p-8 text-start'>
                    Nuestra MISIÓN es formar estudiantes con habilidades cognitivas y competencias de carácter emprendedor, entregando un desarrollo integral 
                    de expresiones deportivas, culturales, académicas, artísticos y medioambientales, potenciando competencias sociales y 
                    laborales, que promuevan el ejercicio ciudadano y responsable de su entorno, construyendo una sociedad más justa y equitativa.
                    </p>
                </div>
                <div className='text-center mx-auto w-full h-110 bg-black text-white p-2'>
                    <h1 className='text-5xl mt-4 lg:mt-20'>Visión</h1>
                    <p className='mt-1 mb-2 p-8 text-start'>
                        La VISIÓN de nuestro Liceo Berta zamorano Lizana entrega a los estudiantes una formación continua, innovadora, emprendedora y en permanente 
                        actualización en pos de su bienestar personal y de su comunidad, desarrollando 
                        estudiantes y adultos integrales, con valores sólidos, habilidades y competencias necesarias, para incorporarse eficientemente en la
                        educación superior, en el mundo laboral y sector productivo.
                    </p>
                </div>
            </div>
        </>
    )
}
