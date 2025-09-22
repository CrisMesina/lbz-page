
export const Directiva = () => {
    
    const directiva = [
        {
            id: 1,
            nombre: "Juan Perez",
            img: "/tea3.jpg",
            cargo: "Director"
        },
        {
            id: 2,
            nombre: "Juan Perez",
            img: "/tea3.jpg",
            cargo: "Director"
        },
        {
            id: 3,
            nombre: "Juan Perez",
            img: "/tea3.jpg",
            cargo: "Director"
        },
        {
            id: 4,
            nombre: "Juan Perez",
            img: "/tea3.jpg",
            cargo: "Director"
        },
    ]
    
    return(
        <>
            <div className='text-center'>
                <h1 className="text-5xl mb-20 font-bold">Equipo Directivo</h1>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-4 mx-auto">
                    {
                        directiva.map((d, i ) => (
                            <div key={i} className="mx-auto rounded-2xl shadow-lg">
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
