

export const Cordinadores = () => {

    const cordinadores = [
        {
            id: 1,
            nombre: "Juan Perez",
            img: "/c_admin.avif",
            cargo: "Cordinador de Administracion",
            animation: "scroll-items-left"
        },
        {
            id: 2,
            nombre: "Juan Perez",
            img: "/c_agro-min.avif",
            cargo: "Cordinadora de Agropecuaria",
            animation: "scroll-items-left"
        },
        {
            id: 3,
            nombre: "Juan Perez",
            img: "/",
            cargo: "Cordinadora de Cientifico Humanista",
            animation: "scroll-items-right"
        },
        {
            id: 4,
            nombre: "Juan Perez",
            img: "/c_progra-min.avif",
            cargo: "Cordinador de Programacion",
            animation: "scroll-items-right"
        },
    ]

    return(
        <>
           <div className='text-center text-white'>
                <h1 className="text-5xl mb-20 font-bold">Cordinadores</h1>
                <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
                    {
                        cordinadores.map((d, i ) => (
                            <div key={i} className={`mx-auto skew-1 transition-all duration-300 hover:scale-110 active:translate-y-1 hover:rotate-1 active:shadow-green-700 my-10 rounded-2xl shadow-lg ${d.animation} bg-gradient-to-b from-theme-blue to-[#249382]`}>
                                <div>
                                    <img src={d.img} className="w-70 h-90 rounded-t-2xl  hover:scale-110 hover:-rotate-1 mx-auto bg-[#249382] p-2"   alt="Imagen de la persona encargada de la especializacion o de la formacion." />
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
