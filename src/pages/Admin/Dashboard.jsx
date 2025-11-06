
import { useEffect, useState } from 'react'
import { Navegador } from '../../assets/components/Navegador'
import { Toast } from '../../utils/utils'
import { Buttons } from './components/Buttons'
import { Formulario } from './components/Formulario'
import { Usuarios } from './components/Usuarios'
import { FormularioUsuario } from './components/FormularioUsuario'
import Swal from 'sweetalert2'

export const Dashboard = () => {
    const [noticia, setNoticia] = useState([])
    const [usuario, setUsuario] = useState([])
    const [activeContent, setActiveContent] = useState('dashboard')
    const [eliminandoNoticia, setEliminandoNoticia] = useState(null)

    const cargarNoticias = () => {
        fetch('http://localhost:3000/noticias')
        .then(response => response.json())
        .then(data =>{
            setNoticia(data);
        })
        .catch(error => console.error('Error al cargar noticias:', error))
    }

    useEffect(() =>{
        cargarNoticias();
    },[])

    const eliminarNoticia = async (noticiaId, titulo) => {

        const confirmar = Swal.fire({
            title: `¿Estás seguro de que deseas eliminar la noticia "${titulo}"?`,
            icon: 'warning',
            showCancelButton: true,
        })


        if (!confirmar) return;

        setEliminandoNoticia(noticiaId);

        try{
            const { isConfirmed } = await confirmar;

            if (!isConfirmed) return;
            const response = await fetch(`http://localhost:3000/noticias/${noticiaId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            
            
            if(!response.ok){
                let errorMessage = `Error ${response.status}: ${response.statusText}`;
                
                // Clonar la respuesta para poder leerla múltiples veces si es necesario
                const responseClone = response.clone();
                
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorData.error || errorMessage;
                    console.error('Detalles del error:', errorData);
                } catch (e) {
                    try {
                        const textError = await responseClone.text();
                        console.error('Respuesta del servidor (texto):', textError);
                        if (textError) errorMessage = textError;
                    } catch (textErr) {
                        console.error('No se pudo leer la respuesta del servidor');
                    }
                }
                throw new Error(errorMessage);
            }
            
            cargarNoticias();
            
            return { success: true}
        }catch(error){
            console.error('Error completo al eliminar la noticia:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error al eliminar la noticia',
                text: error.message
            });
            return { success: false, error: error.message }
        } finally {
            setEliminandoNoticia(null);
        }
    }

    const eliminarUsuario = async (userId) => {
        try{
            const response = await fetch(`http://localhost:3000/usuarios/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if(!response.ok){
                throw new Error('Error al eliminar el usuario')
            }
            return { success: true}
        }catch(error){
            console.error('Error al eliminar el Usuario: ', error)
            return { success: false, error: error.message }
        }
    }


    useEffect(() =>{
        fetch('http://localhost:3000/usuarios')
            .then(response => response.json())
            .then(data =>{
                setUsuario(data);
            })
    }, [])

    const administrar = [
        {
            nombre: 'Noticias',
            cantidad: noticia.length
        },
        {
            nombre: 'Usuarios',
            cantidad: usuario.length
        }
    ]


    

    

    const logueado = JSON.parse(localStorage.getItem('user')) || { username: 'Admin' };
    
    useEffect(() => {
        if (logueado && logueado.username) {
            Toast.fire({
                title: logueado.username.toUpperCase() + ', Bienvenido al Panel de Administración',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000,
            });
        }
    }, [])

    // Función para formatear fecha a DD/MM/YYYY
    const formatearFecha = (fecha) => {
        if (!fecha) return 'Sin fecha'
        
        try {
            const fechaObj = new Date(fecha)
            const dia = fechaObj.getDate().toString().padStart(2, '0')
            const mes = (fechaObj.getMonth() + 1).toString().padStart(2, '0')
            const año = fechaObj.getFullYear()
            return `${dia}/${mes}/${año}`
        } catch (error) {
            return fecha // Si hay error, devolver la fecha original
        }
    }

    // Función para renderizar el contenido activo
    const renderActiveContent = () => {
        switch(activeContent) {
            case 'formulario':
                return <Formulario />
            case 'formulario-usuario':
                return <FormularioUsuario />
            case 'usuarios':
                return <Usuarios />
            case 'noticias':
                return (
                    <div className="text-white">
                        <h2 className="text-2xl font-bold mb-4">Lista de Noticias</h2>
                        {noticia.length === 0 ? (
                            <p className='text-center text-white/70 py-8'>No hay noticias publicadas</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {noticia.map((item, index) => (
                                    <div key={index} className="bg-white/10 border grid grid-cols-2 border-white/20 rounded-lg p-4">
                                        <div>
                                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                            <p className="text-white/80 text-sm mb-2">{item.txtMuestra}</p>
                                            <p className="text-white/60 text-xs">Autor: {item.author}</p>
                                            <p className="text-white/60 text-xs">Fecha: {formatearFecha(item.fecha)}</p>
                                        </div>
                                       <div className='my-auto mx-auto'>
                                            <button 
                                                onClick={() => eliminarNoticia(item.id, item.title)} 
                                                className={`bg-red-500/30 hover:bg-red-600/50 text-white px-4 py-2 rounded-lg transition-colors ${eliminandoNoticia === item.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                title={`Eliminar: ${item.title}`}
                                                disabled={eliminandoNoticia === item.id}
                                            >
                                                {eliminandoNoticia === item.id ? (
                                                    <div className="w-10 h-10 flex items-center justify-center">
                                                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                                    </div>
                                                ) : (
                                                    <img src="/trash.svg" className='w-10 h-10' alt="Eliminar"/>
                                                )}
                                            </button>
                                       </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )
            default:
                return (
                    <div className="text-white">
                        <h2 className="text-2xl font-bold mb-4">Panel de Control</h2>
                        <p className="text-white/80">Selecciona una acción para comenzar a administrar el contenido.</p>
                    </div>
                )
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
            <div className='fixed top-0 w-full z-50'>
                <Navegador/>
            </div>
            
            <div className="pt-20 px-5">
                {/* Header */}
                <div className='text-white mb-8'>
                    <h1 className='ml-20 text-5xl font-semibold'>Bienvenido al lado Administrativo</h1>
                    <p className='ml-20 text-lg mt-2'>Aquí podrás gestionar usuarios y noticias de la página</p>
                </div>
                
                {/* Stats Cards */}
                <div className='mx-5 mb-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {administrar.map((item, index) => (
                            <div key={index} className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white hover:bg-white/15 transition-all duration-300'>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white/80 text-sm font-medium">{item.nombre}</p>
                                        <p className="text-3xl font-bold text-white mt-2">{item.cantidad}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions Section */}
                <div className='mx-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6'>
                    <div className='text-xl text-center mb-6 font-bold text-white'>
                        <h1>Acciones Rápidas</h1>
                    </div>
                    <div className='flex justify-center'>
                        <Buttons setActiveContent={setActiveContent} />
                    </div>
                </div>

                {/* Content Section */}
                <div className='mt-8 mx-5'>
                    <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 min-h-96'>
                        {renderActiveContent()}
                    </div>
                </div>
            </div>
        </div>
    )

}
