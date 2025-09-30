

export const Cordinadores = () => {

    const cordinadores = [
        {
            id: 1,
            nombre: "Juan Perez",
            img: "/director.avif",
            cargo: "Director"
        },
        {
            id: 2,
            nombre: "Juan Perez",
            img: "/c_agro-min.avif",
            cargo: "Director"
        },
        {
            id: 3,
            nombre: "Juan Perez",
            img: "/c-hc-min.avif",
            cargo: "Director"
        },
        {
            id: 4,
            nombre: "Juan Perez",
            img: "/c_progra-min.avif",
            cargo: "Director"
        },
    ]

    return(
        <>
           <div className='text-center'>
                <h1 className="text-5xl mb-20 font-bold">Cordinadores</h1>
                <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
                    {
                        cordinadores.map((d, i ) => (
                            <div key={i} className="mx-auto my-10 rounded-2xl scroll-item-right shadow-lg">
                                <div>
                                    <img src={d.img} className="w-70 rounded-t-2xl mx-auto"  alt="" />
                                </div>
                                <div>
                                    <h1 className="my-4">{d.nombre}</h1>
                                    <p className="my-4">{d.cargo}</p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div> 
        </>
    )
}
