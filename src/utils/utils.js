import Swal from 'sweetalert2'


// Creacion de constante Toast de Sweet Alert

export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
})

// Listar Usuarios
export const apiUsuarios = async () => {
    try {
        const response = await fetch('http://localhost:3000/usuarios')
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const contentType = response.headers.get('content-type')
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('El servidor no devolvió una respuesta JSON válida')
        }
        
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching usuarios:', error)
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            console.warn('No se puede conectar con el servidor de usuarios')
        }
        return []
    }
}

// Crear Usuario
export const crearUsuario = async (userData) => {
    try {
        const response = await fetch('http://localhost:3000/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        
        const contentType = response.headers.get('content-type')
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('El servidor no devolvió una respuesta JSON válida')
        }
        
        const data = await response.json()
        
        if (!response.ok) {
            throw new Error(data.message || 'Error al crear el usuario')
        }
        
        return { success: true, data }
    } catch (error) {
        console.error('Error creating usuario:', error)
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            return { success: false, error: 'No se puede conectar con el servidor. Verifique que la API esté funcionando.' }
        }
        return { success: false, error: error.message }
    }
}


