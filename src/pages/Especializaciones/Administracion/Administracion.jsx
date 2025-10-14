
import { Malla } from './components/Malla'
import { Navegador } from '../../../assets/components/Navegador'

export const Administracion = () => {
    return (
        <>
            <div className='min-h-screen'>
                <div className='sticky top-0 z-10'>
                    {/*<Nav/>*/}
                    <Navegador/>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-2 text-white'>
                    <div className='w-full'>
                        <h1 className='text-3xl font-bold text-center mx-auto text-theme-old-green-dark my-10'>Introduccion</h1>
                        <p className='text-start p-4 '>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore reprehenderit sequi deserunt tempore? Cupiditate deleniti blanditiis, maiores explicabo maxime facilis iure adipisci, qui fugiat sit a culpa quibusdam numquam? Dicta?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore reprehenderit sequi deserunt tempore? Cupiditate deleniti blanditiis, maiores explicabo maxime facilis iure adipisci, qui fugiat sit a culpa quibusdam numquam? Dicta?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab exercitationem eaque esse animi. Ipsum nulla provident consequatur unde voluptatum nesciunt perferendis, eius doloremque recusandae perspiciatis! Molestiae odit amet ab fuga.
                        </p>
                    </div>  
                    <div className='p-4'>
                        {/* COLOCAR UNA IMAGEN O UN CARROUSEL DE IMAGENES (PUEDEN SER LAS DE PUERTAS ABIERTAS) */}
                        <img src="/programacion.avif" className='mx-auto rounded-2xl my-5 hidden lg:block ' />
                    </div>
                </div>

                <div className='min-h-screen p-5'>
                    <Malla/>
                </div>   

                <div>
                    <iframe 
                        className='w-full h-96 lg:h-screen p-10' 
                        src="https://www.youtube.com/embed/-RV-KUR9xzk?si=QBdOVb7yMO2YE0Eb&amp;start=1" 
                        title="Video sobre la formacion Cientifico Humanista" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    >
                    </iframe>
                </div>             
                
            </div>
        </>
    )
}
