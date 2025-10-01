
export const Directiva = () => {
    
    const directiva = [
        {
            id: 1,
            nombre: "Juan Perez",
            img: "/director-min.avif",
            cargo: "Director",
            alt: `Una imagen de nuestro 'DIRECTOR', del Liceo Berta Zamorano Lizana`
        },
        {
            id: 2,
            nombre: "Juan Perez",
            img: "/inspectora-min.avif",
            cargo: "Director",
            alt: `Una imagen de nuestra ' INSPECTORA GENERAL ', del Liceo Berta Zamorano Lizana`
        },
        {
            id: 3,
            nombre: "Juan Perez",
            img: "/utp.avif",
            cargo: "Director",
            alt: `Una imagen de nuestr@ ' JEFA DE UTP ', del Liceo Berta Zamorano Lizana`
        },
        {
            id: 4,
            nombre: "Juan Perez",
            img: "/tea3.avif",
            cargo: "Director",
            alt: `Una imagen de nuestr@ '  ', del Liceo Berta Zamorano Lizana`
        },
    ]
    
    return(
        <>
            <div className='text-center'>
                <h1 className="text-5xl mb-20 font-bold">Equipo Directivo</h1>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mx-auto">
                    {
                        directiva.map((d, i ) => (
                            <div key={i} className="mx-auto rounded-2xl scroll-items-left shadow-lg">
                                <div>
                                    <img src={d.img} className="w-70 rounded-t-2xl mx-auto hover:scale-120 hover:rounded-2xl transition-all duration-150"  alt={d.alt} />
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
