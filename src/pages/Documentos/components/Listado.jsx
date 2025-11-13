

const archivos = [
    {
        id:1,
        name:"Proyecto Educativo Institucional",
        img:"/",
        download:"/Logo-png",
        animation: "scroll-items-left transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:2,
        name:"Reglamento Interno de Convivencia Escolar",
        img:"/", // ubicacion de imagenes -> src/imgs/
        download:"/Logo-png",
        animation: "scroll-items-left transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:3,
        name:"Plan de Gestión de Convivencia Educativa",
        img:"/", // ubicacion de imagenes -> src/imgs/
        download:"/Logo-png",
        animation: "scroll-items-top transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:4,
        name:"Plan de Formación Ciudadana",
        img:"/", // ubicacion de imagenes -> src/imgs/
        download:"/Logo-png",
        animation: "scroll-items-right transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:5,
        name:"Plan Integral de Seguridad Educativa",
        img:"/", // ubicacion de imagenes -> src/imgs/
        download:"/Logo-png",
        animation: "scroll-items-right transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:6,
        name:"Plan Local de Formación para el Desarrollo Profesional",
        img:"/", // ubicacion de imagenes -> src/imgs/
        download:"/Logo-png",
        animation: "scroll-items-left transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:7,
        name:"Plan de Sexualidad, Afectividad y Género",
        img:"/", // ubicacion de imagenes -> src/imgs/
        download:"/Logo-png",
        animation: "scroll-items-left transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:8,
        name:"Plan de Apoyo a la Inclusión",
        img:"/", // ubicacion de imagenes -> src/imgs/
        download:"/Logo-png",
        animation: "scroll-items-top transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    },
    
]

export const Listado = () => {

    const isMobile = window.innerWidth < 768;

    return(
        <>
            <div className=''>
                <h1 className="text-center p-10 text-white text-5xl font-bold">Descargas (pdf)</h1>            
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 xl:grid-cols-5 text-white grid-cols-1' id="documentos">
                {
                    archivos.map((a, i) =>(
                        <div className={`w-70 md:w-80 lg:w-72 xl:w-65 bg-gradient-to-b from-[#249382] ${isMobile ? '' : a.animation} ${isMobile ? 'opacity-100' : ''} my-10 hover:rotate-4 h-96 mx-auto shadow-lg
                            shadow-blue-900 rounded-2xl `} key={i}>
                            <a href="" download={a.download}>
                                <img src={a.img.length < 2 ? "/documento-defecto.png" : a.img} className="rounded-t-2xl mx-auto h-60" alt={a.alt} />
                            </a>
                            <h1 className="text-start mx-10 my-5">{a.name}</h1>
                            <div className="p-4 text-center">
                                <a href=""
                                    download={a.download}
                                    className="p-4 rounded-xl skew-2 shadow-lg shadow-[#249382] hover:shadow-theme-old-green-medium font-bold 
                                        hover:bg-gradient-to-r hover:from-theme-old-green-dark hover:via-theme-old-green hover:to-theme-old-green-nav hover:bg-clip-text hover:text-transparent"
                                    >
                                    <button name="download-pdf" aria-label="Descargar documento PDF">Descargar PDF</button>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
