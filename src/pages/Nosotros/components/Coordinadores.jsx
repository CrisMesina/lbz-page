

export const Coordinadores = () => {

    const coordinadores = [
        {
            id: 1,
            nombre: "Cesar Silva",
            img: "/src/imgs/c_admin.avif", // ubicación de imagenes -> /src/imgs/
            cargo: "Coordinador de Administración",
            animation: "scroll-items-left"
        },
        {
            id: 2,
            nombre: "Juan Perez",
            img: "/src/imgs/c_agro-min.avif", // ubicación de imagenes -> /src/imgs/
            cargo: "Coordinadora de Agropecuaria",
            animation: "scroll-items-left"
        },
        {
            id: 3,
            nombre: "Maria Rudolph",
            img: "/", // ubicación de imagenes -> /src/imgs/
            cargo: "Coordinadora de Científico Humanista",
            animation: "scroll-items-right"
        },
        {
            id: 4,
            nombre: "Alex Carreño",
            img: "/src/imgs/c_progra-min.avif", // ubicación de imagenes -> /src/imgs/
            cargo: "Coordinador de Programación",
            animation: "scroll-items-right"
        },
    ]

    const isMobile = window.innerWidth < 768;


    return(
        <>
           <div className='text-center text-white'>
                <h1 className="text-5xl mb-20 font-bold">Coordinadores</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4">
                    {
                        coordinadores.map((d, i ) => (
                            <div key={i} className={`mx-auto ${isMobile  ? '' : d.animation} skew-1 transition-all duration-300 hover:scale-110 active:translate-y-1 hover:rotate-1 active:shadow-green-700 my-10 rounded-2xl shadow-lg bg-gradient-to-b from-theme-blue to-[#249382]`}>
                                <div>
                                    <img src={d.img.length < 2 ? "/src/imgs/default-profile.avif" : d.img} className="w-70 h-90 rounded-t-2xl object-cover hover:scale-110 hover:-rotate-1 mx-auto bg-[#249382] p-2"   alt="Imagen de la persona encargada de la especialización o de la formación." />
                                </div>
                                <div>
                                    <h1 className="my-4">{d.nombre}</h1>
                                    <p className="my-4 italic">{d.cargo}</p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div> 
        </>
    )
}
