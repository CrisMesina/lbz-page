import React from 'react'

export const Introduccion = () => {
    return (
        <>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    <div className='text-white space-y-6 order-2 lg:order-1'>
                        <div className='inline-block'>
                            <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#249382] to-theme-old-green-light bg-clip-text text-transparent'>
                                ¿Por qué elegir Agropecuaria?
                            </h2>
                            <div className='h-1 w-32 bg-gradient-to-r from-[#249382] to-theme-old-green-light rounded-full'></div>
                        </div>
                        
                        <p className='text-lg leading-relaxed text-gray-300'>
                            La especialización Agropecuaria del Liceo Berta Zamorano Lizana prepara a los estudiantes para liderar el futuro del sector agroalimentario con conocimientos técnicos sólidos y una visión sustentable. Esta formación combina la teoría con la práctica, enfocándose en la producción agrícola, ganadera y el manejo responsable de los recursos naturales.
                        </p>
                        
                        <p className='text-lg leading-relaxed text-gray-300'>
                            Los estudiantes desarrollan competencias en cultivos, crianza de animales, tecnologías agrícolas modernas, gestión de suelos, sistemas de riego, y producción orgánica. Aprenden sobre biotecnología aplicada, seguridad alimentaria y emprendimiento rural, preparándose para enfrentar los desafíos de la agricultura del siglo XXI.
                        </p>
                        
                        <p className='text-lg leading-relaxed text-gray-300'>
                            Esta especialización abre las puertas a carreras universitarias como Agronomía, Medicina Veterinaria, Ingeniería en Alimentos, Biotecnología, o permite el desarrollo de proyectos productivos propios en el sector agrícola y ganadero, contribuyendo al desarrollo sustentable del país.
                        </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
                            <div className='bg-gradient-to-br from-[#249382]/20 to-theme-blue-bg border border-[#249382]/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300'>
                                <h3 className='font-bold text-[#249382] mb-2'> Agricultura</h3>
                                <p className='text-sm text-gray-400'>Producción agrícola moderna</p>
                            </div>
                            <div className='bg-gradient-to-br from-[#249382]/20 to-theme-blue-bg border border-[#249382]/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300'>
                                <h3 className='font-bold text-[#249382] mb-2'> Ganadería</h3>
                                <p className='text-sm text-gray-400'>Crianza y manejo animal</p>
                            </div>
                            <div className='bg-gradient-to-br from-[#249382]/20 to-theme-blue-bg border border-[#249382]/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300'>
                                <h3 className='font-bold text-[#249382] mb-2'> Sustentabilidad</h3>
                                <p className='text-sm text-gray-400'>Manejo responsable de recursos</p>
                            </div>
                            <div className='bg-gradient-to-br from-[#249382]/20 to-theme-blue-bg border border-[#249382]/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300'>
                                <h3 className='font-bold text-[#249382] mb-2'> Biotecnología</h3>
                                <p className='text-sm text-gray-400'>Innovación agrícola aplicada</p>
                            </div>
                        </div>
                    </div>  
                    
                    <div className='relative order-1 lg:order-2'>
                        <div className='absolute -inset-4 bg-gradient-to-r from-[#249382] to-theme-old-green-light rounded-3xl blur-xl opacity-30'></div>
                        <img 
                            src="/c_agro-min.avif" 
                            className='relative rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-[#249382]/30 hover:scale-105 transition-transform duration-500' 
                            alt="Especialización Agropecuaria"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
