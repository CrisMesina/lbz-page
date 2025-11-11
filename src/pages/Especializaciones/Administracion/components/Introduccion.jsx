import React from 'react'

export const Introduccion = () => {
    return (
        <>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    <div className='text-white space-y-6 order-2 lg:order-1'>
                        <div className='inline-block'>
                            <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#249382] to-theme-old-green-light bg-clip-text text-transparent'>
                                ¿Por qué elegir Administración?
                            </h2>
                            <div className='h-1 w-32 bg-gradient-to-r from-[#249382] to-theme-old-green-light rounded-full'></div>
                        </div>
                        
                        <p className='text-lg leading-relaxed text-gray-300'>
                            La especialización en Administración del Liceo Berta Zamorano Lizana forma futuros líderes empresariales con una sólida base en gestión, finanzas y emprendimiento. Esta modalidad está diseñada para estudiantes con visión de negocios que desean comprender el funcionamiento del mundo empresarial desde una perspectiva práctica y actualizada.
                        </p>
                        
                        <p className='text-lg leading-relaxed text-gray-300'>
                            Durante su formación, los estudiantes desarrollan competencias en contabilidad, marketing, recursos humanos, gestión de proyectos y análisis financiero. Aprenden a tomar decisiones estratégicas, liderar equipos de trabajo y identificar oportunidades de negocio en un mercado cada vez más competitivo y globalizado.
                        </p>
                        
                        <p className='text-lg leading-relaxed text-gray-300'>
                            Nuestros egresados están preparados para continuar estudios superiores en carreras como Administración de Empresas, Contabilidad, Ingeniería Comercial, Marketing, o para emprender sus propios proyectos empresariales con las herramientas y conocimientos necesarios para el éxito.
                        </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
                            <div className='bg-gradient-to-br from-[#249382]/20 to-theme-blue-bg border border-[#249382]/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300'>
                                <h3 className='font-bold text-[#249382] mb-2'> Gestión</h3>
                                <p className='text-sm text-gray-400'>Liderazgo y gestión empresarial</p>
                            </div>
                            <div className='bg-gradient-to-br from-[#249382]/20 to-theme-blue-bg border border-[#249382]/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300'>
                                <h3 className='font-bold text-[#249382] mb-2'> Finanzas</h3>
                                <p className='text-sm text-gray-400'>Contabilidad y análisis financiero</p>
                            </div>
                            <div className='bg-gradient-to-br from-[#249382]/20 to-theme-blue-bg border border-[#249382]/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300'>
                                <h3 className='font-bold text-[#249382] mb-2'> Emprendimiento</h3>
                                <p className='text-sm text-gray-400'>Desarrollo de proyectos propios</p>
                            </div>
                            <div className='bg-gradient-to-br from-[#249382]/20 to-theme-blue-bg border border-[#249382]/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300'>
                                <h3 className='font-bold text-[#249382] mb-2'> Marketing</h3>
                                <p className='text-sm text-gray-400'>Estrategias comerciales modernas</p>
                            </div>
                        </div>
                    </div>  
                    
                    <div className='relative order-1 lg:order-2'>
                        <div className='absolute -inset-4 bg-gradient-to-r from-[#249382] to-theme-old-green-light rounded-3xl blur-xl opacity-30'></div>
                        <img 
                            src="/src/imgs/c_admin.avif" 
                            className='relative rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-[#249382]/30 hover:scale-105 transition-transform duration-500' 
                            alt="Especialización en Administración"
                        />
                    </div>
                </div>
                    </div>            
        </>
    )
}
