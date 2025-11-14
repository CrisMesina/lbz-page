import React from 'react'

export const Introduccion = () => {

    const isMobile = window.innerWidth < 768;

    return (
        <>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    <div className='text-white space-y-6 order-2 lg:order-1'>
                        <div className={`inline-block ${isMobile ? '' : 'scroll-items-left' }`}>
                            <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#249382] to-theme-old-green-light bg-clip-text text-transparent'>
                                ¿Por qué elegir Programación?
                            </h2>
                            <div className='h-1 w-32 bg-gradient-to-r from-[#249382] to-theme-old-green-light rounded-full'></div>
                        </div>
                        
                        <p className={`text-lg leading-relaxed text-gray-30 ${isMobile ? '' : 'scroll-items-right'}`}>
                            La especialización en Programación del Liceo Berta Zamorano Lizana forma a los desarrolladores del futuro, brindando una educación técnica de vanguardia en el mundo de la tecnología y la informática. Esta modalidad está diseñada para estudiantes apasionados por la innovación digital y el desarrollo de soluciones tecnológicas.
                        </p>
                        
                        <p className={`text-lg leading-relaxed text-gray-300 ${isMobile ? '' : 'scroll-items-left'}`}>
                            Durante su formación, los estudiantes aprenden múltiples lenguajes de programación, desarrollo web, bases de datos y metodologías ágiles de desarrollo. Desarrollan competencias en soporte de usuario, fundamentos de redes y resolución de problemas técnicos, manteniéndose al día con las últimas tendencias tecnológicas.
                        </p>
                        
                        <p className={`text-lg leading-relaxed text-gray-300 ${isMobile ? '' : 'scroll-items-right'}`}>
                            Nuestros egresados están preparados para continuar estudios en carreras como Ingeniería en Informática, Desarrollo de Software, o para emprender proyectos tecnológicos propios. La industria digital ofrece infinitas oportunidades para quienes dominan estas competencias del siglo XXI.
                        </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
                            <div className={`bg-gradient-to-br from-[#249382]/20 to-theme-blue-bg border border-[#249382]/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300 ${isMobile ? '' : 'scroll-items-left'}`}>
                                <h3 className='font-bold text-[#249382] mb-2'> Desarrollo</h3>
                                <p className='text-sm text-gray-400'>Múltiples lenguajes de programación</p>
                            </div>
                            <div className={`bg-gradient-to-br from-[#249382]/20 to-theme-blue-bg border border-[#249382]/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300 ${isMobile ? '' : 'scroll-items-right'}`}>
                                <h3 className='font-bold text-[#249382] mb-2'> Web</h3>
                                <p className='text-sm text-gray-400'>Desarrollo web moderno</p>
                            </div>
                            <div className={`bg-gradient-to-br from-[#249382]/20 to-theme-blue-bg border border-[#249382]/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300 ${isMobile ? '' : 'scroll-items-left'}`}>
                                <h3 className='font-bold text-[#249382] mb-2'> Bases de Datos</h3>
                                <p className='text-sm text-gray-400'>Gestión de información</p>
                            </div>
                            <div className={`bg-gradient-to-br from-[#249382]/20 to-theme-blue-bg border border-[#249382]/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300 ${isMobile ? '' : 'scroll-items-right'}`}>
                                <h3 className='font-bold text-[#249382] mb-2'> Metodologías</h3>
                                <p className='text-sm text-gray-400'>Desarrollo ágil y moderno</p>
                            </div>
                        </div>
                    </div>  

                    <div className={`relative order-1 lg:order-2 ${isMobile ? '' : 'scroll-items-right'}`}>
                        <div className='absolute -inset-4 bg-gradient-to-r from-[#249382]  to-theme-old-green-light rounded-3xl blur-xl opacity-30'></div>
                        <img 
                            src="/c_progra.avif" 
                            className='relative rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-[#249382]/30 hover:scale-105 transition-transform duration-500' 
                            alt="Especialización en Programación"
                        />
                    </div>
                </div>
                    </div>            
        </>
    )
}
