
export const Directiva = () => {
    
    const directiva = [
        {
            id: 1,
            nombre: "Marcos Allendes",
            img: "/director.avif", 
            cargo: "Director",
            alt: `Una imagen de nuestro 'DIRECTOR', del Liceo Berta Zamorano Lizana`,
            animation: "scroll-items-left"
        },
        {
            id: 2,
            nombre: "Carolina Cavieres",
            img: "/inspectora.avif", 
            cargo: "Inspectora General",
            alt: `Una imagen de nuestra ' INSPECTORA GENERAL ', del Liceo Berta Zamorano Lizana`,
            animation: "scroll-items-left"
        },
        {
            id: 3,
            nombre: "Daniela Reveco",
            img: "/utp.avif", 
            cargo: "Jefa de UTP",
            alt: `Una imagen de nuestra ' JEFA DE UTP ', del Liceo Berta Zamorano Lizana`,
            animation: "scroll-items-right"
        }
    ]
    
    const isMobile = window.innerWidth < 768;


    return(
        <>
            <div className='text-center text-white'>
                <h1 className="text-5xl mb-20 font-bold">Equipo Directivo</h1>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                    {
                        directiva.map((d, i ) => (
                            <div key={i} className={`mx-auto rounded-2xl -skew-1 active:shadow-green-700 active:translate-y-1 hover:rotate-1 ${isMobile ? '' : d.animation} transition-all duration-300 hover:scale-110 shadow-lg bg-gradient-to-b from-theme-blue to-[#249382]`}>
                                <div>
                                    <img src={d.img.length < 2 ? '/default-profile.avif' : d.img} className="w-70 h-90 p-2 object-cover rounded-t-2xl bg-[#249382] mx-auto hover:-rotate-1 hover:scale-110 transition-all duration-150"  alt={d.alt} />
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
