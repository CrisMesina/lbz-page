import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export const Usuarios = () => {
    

    const [usuario, setUsuario] = useState([]);
    const [eliminando, setEliminando] = useState(null);

    const cargarUsuarios = () => {
        fetch('http://localhost:3000/usuarios')
            .then(response => response.json())
            .then(data => {
                setUsuario(data);
            })
            .catch(error => console.error('Error al cargar usuarios:', error))
    }

    useEffect(()=>{
        cargarUsuarios();
    },[])
    
    const eliminarUsuario = async (userId, username) => {
        // Confirmación antes de eliminar
        const confirmar = Swal.fire({
            title: `¿Estás seguro de eliminar al usuario "${username}"?`,
            text: "Esta acción no se puede deshacer.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
        });
        

        setEliminando(userId);
        
        try{
            const { isConfirmed } = await confirmar;
            if (!isConfirmed) return;
            
            const response = await fetch(`http://localhost:3000/usuarios/${userId}`, {
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
            
            // Recargar la lista de usuarios después de eliminar
            cargarUsuarios();
            
            return { success: true}
        }catch(error){
            console.error('Error completo al eliminar el Usuario:', error);
            alert('Error al eliminar el usuario: ' + error.message);
            return { success: false, error: error.message }
        } finally {
            setEliminando(null);
        }
    }

    return (
        <>
            <div className='w-auto grid grid-cols-1 text-center text-white'>

                <h1 className='text-4xl font-bold text-center mb-10'>Listado de Usuarios</h1>
                
                <div className='flex'>
                    <div className='grid grid-cols-4 w-full'>
                        <h2 className='text-xl font-bold mb-5'>ID</h2>
                        <h2 className='text-xl font-bold mb-5'>Username</h2>
                        <h2 className='text-xl font-bold mb-5'>Rol</h2>
                    </div>
                </div>
                
                <div className='flex flex-col mx-auto w-full p-3'>
                    {usuario.length === 0 ? (
                        <p className='text-center text-white/70 py-8'>No hay usuarios registrados</p>
                    ) : (
                        usuario.map((u, i) =>(
                            <div key={i} className='grid grid-cols-4 h-15 shadow-md bg-blue-950/30 text-center p-2 my-2 rounded-xl'>
                                <p className='w-1/4 mx-auto my-auto'> {u.id}</p>
                                <p className='w-1/4 mx-auto my-auto italic'> {u.username}</p>
                                <p className={`${u.rol === 'admin' ? 'text-red-500' : 'text-green-500'} my-auto mx-auto font-bold`}> {u.rol}</p>
                                <p className='w-1/4 mx-auto'>
                                    <button 
                                        onClick={() => eliminarUsuario(u.id, u.username)} 
                                        title={`Eliminar usuario: ${u.username}`}
                                        className={`hover:scale-110 transition-transform ${eliminando === u.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={eliminando === u.id}
                                    >
                                        {eliminando === u.id ? (
                                            <div className="w-10 h-10 flex items-center justify-center">
                                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                            </div>
                                        ) : (
                                            <img src="/trash.svg" className='w-10 h-10' alt="Eliminar"/>
                                        )}
                                    </button>
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}
