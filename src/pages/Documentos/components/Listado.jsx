

const archivos = [
    {
        id:1,
        name:"Proyecto Educativo Institucional",
        img:"/PEI.avif",
        download:"/PEI.pdf",
        animation: "scroll-items-left transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:2,
        name:"Reglamento Interno de Convivencia Escolar",
        img:"/PEI.avif",
        download:"/PEI.pdf",
        animation: "scroll-items-left transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:3,
        name:"Plan de Gestión de Convivencia Educativa",
        img:"/PGCE.avif",
        download:"/PGCE.pdf",
        animation: "scroll-items-top transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:4,
        name:"Plan de Formación Ciudadana",
        img:"/PFC.avif",
        download:"/PFC.pdf",
        animation: "scroll-items-right transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:5,
        name:"Plan Integral de Seguridad Educativa",
        img:"/PISE.avif",
        download:"/PISE.pdf",
        animation: "scroll-items-right transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:6,
        name:"Plan Local de Formación para el Desarrollo Profesional",
        img:"/PLFDP.avif",
        download:"/PLFDP.pdf",
        animation: "scroll-items-left transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:7,
        name:"Plan de Sexualidad, Afectividad y Género",
        img:"/PSAG.avif",
        download:"/PSAG.pdf",
        animation: "scroll-items-left transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:8,
        name:"Plan de Apoyo a la Inclusión",
        img:"/PAI.avif",
        download:"/PAI.pdf",
        animation: "scroll-items-top transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:9,
        name:"Reglamento de Evaluación",
        img: "/RE.avif",
        download:"/RE.pdf",
        animation: "scroll-items-right transition-all scroll-item duration-200",
        alt: "Directorio de descarga del archivo '  ' "
    }
    
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
                            <a href={a.img && a.img.length > 1 ? a.img : "/documento-defecto.png"} target="_blank" rel="noopener noreferrer">
                                <img src={a.img && a.img.length > 1 ? a.img : "/documento-defecto.png"} className="rounded-t-2xl mx-auto h-50" alt={a.alt} />
                            </a>
                            <h1 className="text-start mx-10 my-3">{a.name}</h1>
                            <div className="p-4 text-center">
                                {
                                    a.download && a.download.toLowerCase().endsWith('.pdf') ? (
                                        <a href={a.download} target="_blank" rel="noopener noreferrer" download className="p-4 rounded-xl skew-2 shadow-lg shadow-[#249382] hover:shadow-theme-old-green-medium font-bold hover:bg-gradient-to-r hover:from-theme-old-green-dark hover:via-theme-old-green hover:to-theme-old-green-nav hover:bg-clip-text hover:text-transparent">
                                            <button name="download-pdf" aria-label="Descargar documento PDF">Descargar PDF</button>
                                        </a>
                                    ) : (
                                        <button disabled className="p-4 rounded-xl   bg-gray-600 text-gray-200 cursor-not-allowed font-bold" aria-label="Documento no disponible">No disponible</button>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
