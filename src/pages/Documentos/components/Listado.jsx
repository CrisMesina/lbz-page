

const archivos = [
    {
        id:1,
        name:"Documento 1",
        img:"/Logo.png",
        download:"/Logo-png",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:2,
        name:"Documento 1",
        img:"/Logo.png",
        download:"/Logo-png",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:3,
        name:"Documento 1",
        img:"/Logo.png",
        download:"/Logo-png",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:4,
        name:"Documento 1",
        img:"/Logo.png",
        download:"/Logo-png",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:5,
        name:"Documento 1",
        img:"/Logo.png",
        download:"/Logo-png",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:6,
        name:"Documento 1",
        img:"/Logo.png",
        download:"/Logo-png",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:7,
        name:"Documento 1",
        img:"/Logo.png",
        download:"/Logo-png",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:8,
        name:"Documento 1",
        img:"/Logo.png",
        download:"/Logo-png",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:9,
        name:"Documento 1",
        img:"/Logo.png",
        download:"/Logo-png",
        alt: "Directorio de descarga del archivo '  ' "
    },
    {
        id:10,
        name:"Documento 1",
        img:"/Logo.png",
        download:"/Logo-png",
        alt: "Directorio de descarga del archivo '  ' "
    },
]

export const Listado = () => {
    return(
        <>
            <div className=''>
                <h1 className="text-start p-10 text-5xl font-bold">Descargas (pdf)</h1>            
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-5 grid-cols-1 '>
                {
                    archivos.map((a, i) =>(
                        <div className=" w-70 md:w-80 my-10 scroll-item h-auto mx-auto shadow-lg shadow-blue-900 rounded-2xl">
                            <a href="" download={a.download}>
                                <img src={a.img} className="rounded-t-2xl mx-auto" alt="" />
                            </a>
                            <h1 className="text-start mx-10 my-10">{a.name}</h1>
                            <div className="p-10 text-center">
                                <a href=""
                                    download={a.download}
                                    className="p-4 rounded-xl shadow-lg hover:shadow-theme-old-green-medium font-bold 
                                        hover:bg-gradient-to-r hover:from-theme-old-green-dark hover:via-theme-old-green hover:to-theme-old-green-nav hover:bg-clip-text hover:text-transparent"
                                    >
                                    <button>Descargar PDF</button>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
