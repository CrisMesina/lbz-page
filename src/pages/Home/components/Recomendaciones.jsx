

export const Recomendaciones = () => {

    const recomendaciones = [
        {
            id : 1,
            title: "Excelentes Profesores",
            img : "/director.avif",
            texto : "Contamos con los mejores profesores a nivel regional, Nuestros profesores se caracterizan por tener un perfil proactivo y ético. Están llenos de entusiasmo por enseñar y hacer que nuestros alumnos lleguen a la cima del éxito.",
            nombre : "Marcos Allende    ",
            animation: "scroll-items-down",
            cargo : "Director",
            alt: "Imagen de la persona que entrega la recomendacion de nuestra institucion"
        },
        {
            id : 2,
            title: "Buena convivencia",
            img : "/",
            texto : "Creemos que la convivencia es parte de un todo, donde los principales actores de este establecimiento y proceso educativo son nuestros estudiantes. Ellos a partir de un pensamiento crítico y reflexivo pueden desarrollar el aprendizaje colaborativo, enfrentar distintas problemáticas y junto con ello crear los espacios en los cuales se genere el desarrollo de habilidades individuales y grupales.",
            nombre : "Juan Perez",
            animation: "scroll-items-down",
            cargo : "Director",
            alt: "Imagen de la persona que entrega la recomendacion de nuestra institucion" 
        },
        {
            id : 3,
            title: "Oportunidades después de egresar",
            img : "/c_admin.avif",
            texto : "Después de egresar apoyamos a nuestros alumnos en buscar el lugar de práctica y realizamos con ellos un plan de seguimiento, hay empresas que ofrecen cupos laborales para algunos estudiantes. Recuerda siempre que puedes continuar estudiando y ser un profesional de nivel superior o universitario. También te puedes desempeñar en empresas agrícolas de la zona o comenzar tu propio negocio.",
            nombre : "Cesar Silva",
            animation: "scroll-items-down",
            cargo : "Coordinador de Administración",
            alt: "Imagen de la persona que entrega la recomendacion de nuestra institucion" 
        },
        {
            id : 4,
            title: "Programa de integración escolar",
            img : "/PIE.avif",
            texto : "El programa de integración escolar (PIE) está compuesto por equipo multidisciplinario de profesionales que buscan como objetivo central favorecer el proceso educativo de todos estudiantes, con el propósito de enriquecer su inclusión al mundo laboral.",
            nombre : "Barbara ...",
            animation: "scroll-items-down",
            cargo : "Director",
            alt: "Imagen de la persona que entrega la recomendacion de nuestra institucion" 
        },
    ]

    const isMobile = window.innerWidth < 768;

    return(
        <>
            <div className='md:grid md:grid-cols-2 grid-cols-1' id='recomendaciones'>
                {recomendaciones.map((r, i) =>(
                    <div key={i} className={`flex mx-2 ${isMobile ? '': 'scroll-items-top delay-300'} md:mx-5  md:my-20`}>
                        <img src={r.img.length < 2? '/default-profile.avif' : r.img} className='object-cover brightness-75 w-auto h-20 aspect-square my-4 rounded-full hover:border hover:border-theme-old-green' alt={r.alt} />
                        <div className='flex-col'>
                            <h1 className='text-theme-old-green  mx-2 p-1 font-extrabold text-xl mb-5'>{r.title}</h1>
                            <p className='text-start text-white dark:text-white p-1 mx-2'>{r.texto}</p>
                            <span className='flex p-1 mt-4 mx-2 text-[12px] italic'>
                                <span className='text-theme-old-green font-bold '>{r.nombre}</span>, 
                                <p className='font-theme-caveat font-bold text-white'>{r.cargo}</p>
                            </span>
                        </div>
                    </div>
                ))}
                
            </div>
        </>
    )
}
