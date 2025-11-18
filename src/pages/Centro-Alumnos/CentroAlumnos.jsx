
import { Alumnos } from './components/Alumnos'
import { Footer } from '../../assets/components/Footer'
import { Navegador } from '../../assets/components/Navegador'
import { Welcome } from './components/Welcome'

export const CentroAlumnos = () => {

    const img = "ca_fotoGrupal.avif"; 
    return(
        <>
            <div className='min-h-screen'>
                <div className='sticky top-0 z-10'>
                    <Navegador/>
                </div>
                <div className='h-screen'>
                    <div className=''>
                        <Welcome/>
                    </div>
                </div>
                <div>
                    <div className='p-5 mx-auto grid grid-cols-1 md:grid-cols-2'>
                        <div>
                            <h1 className='text-4xl text-center font-bold p-3 text-white' id='conocerpadres'>Conoce a nuestro Centro de Alumnos</h1>
                            <p className='lg:p-20 p-4 text-lg text-start justify-between text-white'>
                                El Centro de Alumnos del Liceo Berta Zamorano Lizana es el corazón de la vida estudiantil, donde los estudiantes tienen voz y voto en las decisiones que afectan su experiencia educativa. Representamos los intereses, necesidades y aspiraciones de toda la comunidad estudiantil, promoviendo un ambiente de participación democrática y liderazgo juvenil.
                                <br/><br/>
                                Organizamos actividades recreativas, culturales y deportivas que enriquecen la vida escolar, desde competencias inter-especializaciones hasta eventos solidarios que fortalecen los valores de nuestra institución. Trabajamos como puente entre los estudiantes y la administración del liceo, asegurando que cada voz sea escuchada y cada propuesta sea considerada.
                                <br/><br/>
                                Únete a nosotros y sé parte del cambio. Juntos construimos un liceo más inclusivo, dinámico y lleno de oportunidades para crecer tanto académica como personalmente.
                            </p>
                        </div>
                        <div className='flex my-20'>
                            <img src={`${img.length < 2 ? '/default-profile.avif' : img}`} className=' w-70 md:w-90 lg:w-120 mx-auto my-auto rounded-lg shadow-xl  shadow-amber-50 -skew-2 hover:skew-2 transition-all duration-300' alt="Imagen representativa del Centro de Alumnos" />
                        </div>
                    </div>
                </div>
                <div className='mt-5' id='alumnos'>
                    <Alumnos/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

