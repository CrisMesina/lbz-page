
export const Malla = () => {
    
    const tercero = [
        {
            ramo: "Taller de Literatura",
        },
        {
            ramo: "Promoción de Estilos de Vida Activos y Saludables",
        },
        {
            ramo: "Probabilidad y Estadística Descriptiva",
        },
        {
            ramo: "Interpretación Musucal",
        },
        {
            ramo: "Geografía, Territorio y Desafios Socio Ambientales"
        },
        {
            ramo: "Biología de los Ecosistemas",
        }
    ]

    const cuarto = [
        {
            ramo: "Lectura y escritura Especializada",
        },
        {
            ramo: "Ciencias del Ejercicio Fisico y Deportivo",
        },
        {
            ramo: "Limites, derivadas e Integrales",
        },
        {
            ramo: "Filosofía Política",
        },
        {
            ramo: "Economía y sociedad",
        },
        {
            ramo: "Bología Celular y Molecuar",
        }
    ]


    const isMobile = window.innerWidth < 768;
    
    return (
        <>
            <div className="container mx-auto my-10 min-h-screen">
                <div className="relative">
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#249382] via-theme-old-green-light to-[#249382] opacity-30"></div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-4">
                        {/* Tercer Año */}
                        <div className="relative">
                            <div className={`z-5 bg-gradient-to-r from-[#249382] to-theme-old-green-light p-6 rounded-2xl shadow-2xl mb-8 ${isMobile ? '' : 'scroll-items-top'}`}>
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-bold text-[#249382]">3°</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white">Tercer Año</h2>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {tercero.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className={`group relative bg-gradient-to-br ${isMobile ? '' : 'scroll-items-left'} from-theme-blue-bg/80 to-theme-blue/50 backdrop-blur-sm border-2 border-[#249382]/30 hover:border-[#249382] p-5 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#249382]/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#249382]/0 via-[#249382]/10 to-[#249382]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                                        
                                        <div className="relative flex items-center gap-4">
                                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#249382] to-theme-old-green-light rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white font-semibold text-lg leading-tight">
                                                    {item.ramo}
                                                </p>
                                            </div>  
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cuarto Año */}
                        <div className="relative">
                            <div className={`z-5 bg-gradient-to-r from-theme-old-green-light to-[#249382] p-6 rounded-2xl shadow-2xl mb-8 ${isMobile ? '' : 'scroll-items-top'}`}>
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-bold text-[#249382]">4°</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white">Cuarto Año</h2>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {cuarto.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className={`group relative ${isMobile ? '' : 'scroll-items-right'} bg-gradient-to-br from-theme-blue-bg/80 to-theme-blue/50 backdrop-blur-sm border-2 border-theme-old-green-light/30 hover:border-theme-old-green-light p-5 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-theme-old-green-light/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-theme-old-green-light/0 via-theme-old-green-light/10 to-theme-old-green-light/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                                        
                                        <div className="relative flex items-center gap-4">
                                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-theme-old-green-light to-[#249382] rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white font-semibold text-lg leading-tight">
                                                    {item.ramo}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    }
