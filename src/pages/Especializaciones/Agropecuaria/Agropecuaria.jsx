
import { Malla } from './components/Malla'
import { Navegador } from '../../../assets/components/Navegador'

export const Agropecuaria = () => {
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
                        <p className='text-start p-2 md:p-20 '>
                            La especialización Agropecuaria del Liceo Berta Zamorano Lizana prepara a los estudiantes para liderar el futuro del sector agroalimentario con conocimientos técnicos sólidos y una visión sustentable. Esta formación combina la teoría con la práctica, enfocándose en la producción agrícola, ganadera y el manejo responsable de los recursos naturales.
                            <br/><br/>
                            Los estudiantes desarrollan competencias en cultivos, crianza de animales, tecnologías agrícolas modernas, gestión de suelos, sistemas de riego, y producción orgánica. Aprenden sobre biotecnología aplicada, seguridad alimentaria y emprendimiento rural, preparándose para enfrentar los desafíos de la agricultura del siglo XXI.
                            <br/><br/>
                            Esta especialización abre las puertas a carreras universitarias como Agronomía, Medicina Veterinaria, Ingeniería en Alimentos, Biotecnología, o permite el desarrollo de proyectos productivos propios en el sector agrícola y ganadero, contribuyendo al desarrollo sustentable del país.
                        </p>
                    </div>  
                    <div className='p-4'>
                        {/* COLOCAR UNA IMAGEN O UN CARROUSEL DE IMAGENES (PUEDEN SER LAS DE PUERTAS ABIERTAS) */}
                        <img src="/agro.avif" className='mx-auto rounded-2xl my-30 hidden lg:block ' />
                    </div>
                </div>

                <div className='min-h-screen p-5'>
                    <Malla/>
                </div>     
            </div>
        </>
    )
}
