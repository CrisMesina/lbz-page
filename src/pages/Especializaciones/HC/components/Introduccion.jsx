

export const Introduccion = () => {
    
    const imgIntro = "/c_hc.avif";


    return (
        <>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    <div className='text-white space-y-6 order-2 lg:order-1'>
                        <div className='inline-block'>
                            <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#249382] to-theme-old-green-light bg-clip-text text-transparent'>
                                ¿Por qué elegir HC?
                            </h2>
                            <div className='h-1 w-32 bg-gradient-to-r from-[#249382] to-theme-old-green-light rounded-full'></div>
                        </div>
                        
                        <p className='text-lg leading-relaxed text-gray-300'>
                            La formación Científico Humanista en el Liceo Berta Zamorano Lizana está diseñada para estudiantes que buscan una educación integral y equilibrada, preparándolos para enfrentar los desafíos del mundo universitario y profesional. Esta modalidad combina de manera armoniosa las ciencias exactas con las humanidades, desarrollando tanto el pensamiento lógico-matemático como las habilidades comunicativas y de análisis crítico.
                        </p>
                        
                        <p className='text-lg leading-relaxed text-gray-300'>
                            Nuestros estudiantes de HC exploran áreas como matemáticas, física, química, biología, lenguaje, historia, filosofía e idiomas extranjeros, construyendo una base sólida de conocimientos que les permite acceder a cualquier carrera universitaria. El enfoque pedagógico promueve la investigación, el debate académico y el desarrollo de competencias transversales esenciales para el siglo XXI.
                        </p>
                        
                        <p className='text-lg leading-relaxed text-gray-300'>
                            Con esta formación, nuestros egresados están preparados para destacar en carreras como medicina, ingeniería, derecho, pedagogía, psicología, entre muchas otras, contando con las herramientas necesarias para ser profesionales íntegros y ciudadanos comprometidos con la sociedad.
                        </p>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
                            <div className='bg-gradient-to-br from-[#249382]/20 to-theme-blue-bg border border-[#249382]/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300'>
                                <h3 className='font-bold text-[#249382] mb-2'> Versatilidad</h3>
                                <p className='text-sm text-gray-400'>Acceso a cualquier carrera universitaria</p>
                            </div>
                            <div className='bg-gradient-to-br from-[#249382]/20 to-theme-blue-bg border border-[#249382]/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300'>
                                <h3 className='font-bold text-[#249382] mb-2'> Ciencias</h3>
                                <p className='text-sm text-gray-400'>Formación sólida en ciencias exactas</p>
                            </div>
                            <div className='bg-gradient-to-br from-[#249382]/20 to-theme-blue-bg border border-[#249382]/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300'>
                                <h3 className='font-bold text-[#249382] mb-2'> Humanidades</h3>
                                <p className='text-sm text-gray-400'>Desarrollo del pensamiento crítico</p>
                            </div>
                            <div className='bg-gradient-to-br from-[#249382]/20 to-theme-blue-bg border border-[#249382]/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300'>
                                <h3 className='font-bold text-[#249382] mb-2'> Excelencia</h3>
                                <p className='text-sm text-gray-400'>Preparación integral de calidad</p>
                            </div>
                        </div>
                    </div>  
                    
                    <div className='relative order-1 lg:order-2'>
                        <div className='absolute -inset-4 bg-gradient-to-r from-[#249382] wto-theme-old-green-light rounded-3xl blur-xl opacity-30'></div>
                        <img 
                            src={`${imgIntro.length > 0 ? "/default-profile.avif" :  imgIntro }`}
                            className='relative rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-[#249382]/30 hover:scale-105 transition-transform duration-500' 
                            alt="Formación Científico Humanista"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
