
export const Malla = () => {
    
    const tercero = [
        {
            ramo: "Programación y  Base de datos"
        },
        {
            ramo: "Instalación y configuración de equipos informáticos"
        },
        {
            ramo: "Soporte a usuarios y productividad"
        },
        {
            ramo: "Sistemas operativos",
        }
    ]

    const cuarto = [
        {
            ramo: "Emprendimiento y empleabilidad programación"
        },
        {
            ramo: "Diseño de bases de datos relaciones"
        },
        {
            ramo: "Programación Orientada a Objetos"
        },
        {
            ramo: "Administración de base de datos"
        },
        {
            ramo: "Desarrollo de aplicaciones web"
        }
    ]
    
    return (
        <>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-2">
                    <div>
                        <h1 className="text-center dark:text-white text-black text-5xl font-bold">Tercer Año</h1>
                        {tercero.map((item, index) => (
                            <div key={index} className="bg-gray-200 border-l-green-600 hover:text-white fill-hover hover:font-bold border-l-8 skew-1 hover:rotate-1 text-black m-4 p-4 rounded-2xl shadow-lg hover:scale-105 hover:shadow-lg hover:shadow-blue-900 transition-all duration-300  ">
                                <p className="text-lg p-1 font-bold bg-gradient-to-r from-green-950 to-green-500 bg-clip-text text-transparent
                                hover:bg-gradient-to-r hover:from-green-600 hover:to-[#249382]">{item.ramo}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h1 className="text-center dark:text-white text-black text-5xl font-bold">Cuarto Año</h1>
                        {cuarto.map((item, index) => (
                            <div key={index} className="bg-gray-200 border-l-green-600 hover:text-white fill-hover hover:font-bold border-l-8 skew-1 hover:rotate-1 text-black m-4 p-4 rounded-2xl shadow-lg hover:scale-105 hover:shadow-lg hover:shadow-blue-900 transition-all duration-300  ">
                                <p className="text-lg p-1 font-bold bg-gradient-to-r from-green-950 to-green-500 bg-clip-text text-transparent
                                hover:bg-gradient-to-r hover:from-green-600 hover:to-[#249382] ">{item.ramo}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
    }
