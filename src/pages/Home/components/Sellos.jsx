import React from 'react'

export const Sellos = () => {
    return(
        <>
            <div className='flex items-center justify-center'>
                <h1 className='text-center flex items-center justify-center mb-10 text-5xl font-bold p-4 rounded-lg scroll-items-down' >Nuestros Sellos</h1>
                
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1  text-center mx-auto'>
                <div className='md:w-90 lg:w-120 mx-auto scroll-items-left'>
                    <h1 className='text-2xl text-start p-4 font-extrabold mb-5'>Sello medioambientalista</h1>
                    <p className='text-start p-4 font-theme-zalando'>
                        Formar estudiantes que internalizan y actúan consecuentemente con la formación
                        valórica. En el ámbito personal cuidan y respetan su propia vida, poseen un nivel adecuado
                        de autoestima, son respetuosos, creativos y autónomos. En el contexto de la ecología social
                        son promotores de la solidaridad como actitud de vida y contribuyen a crear ambientes de
                        sana convivencia en la ecología cultural son reflexivos, metódicos con una orientación
                        científica para indagar y proponer soluciones a los problemas medioambientales. Son
                        capaces de valorar y cuidar su entorno natural.
                    </p>
                </div>
                <div className='md:w-90 lg:w-120 mx-auto scroll-item-right'>
                    <h1 className='text-2xl text-start p-4 font-extrabold mb-5'>Sello Mentalidad Emprendedora</h1>
                    <p className='text-start p-4 font-theme-zalando'>
                        Formar estudiantes con mentalidad de emprendimiento que le permita detectar
                        oportunidades, innovadoras, formado en valores y con características que incluyan
                        habilidades de toma de decisiones, aceptar los desafíos, ser flexibles a los cambios y superar
                        nuevos retos. 
                    </p>
                </div>
            </div>
        </>
    )
}
