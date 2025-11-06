import React, { useState } from 'react'
import { Toast, crearUsuario } from '../../../utils/utils'

export const FormularioUsuario = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rol: 'admin'
    })

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        // Validaciones básicas
        if (!formData.username.trim()) {
            Toast.fire({
                icon: 'warning',
                title: 'El nombre de usuario es requerido'
            })
            return
        }
        
        if (formData.password.length < 6) {
            Toast.fire({
                icon: 'warning',
                title: 'La contraseña debe tener al menos 6 caracteres'
            })
            return
        }
        
        setLoading(true)

        const result = await crearUsuario(formData)
        
        if (result.success) {
            Toast.fire({
                icon: 'success',
                title: 'Usuario creado exitosamente'
            })
            setFormData({
                username: '',
                password: '',
                rol: 'admin'
            })
        } else {
            Toast.fire({
                icon: 'error',
                title: result.error || 'Error al crear el usuario'
            })
        }
        
        setLoading(false)
    }

    return (
        <div className="text-white">
            <h2 className="text-2xl font-bold mb-6">Crear Nuevo Usuario</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-white font-medium mb-2">Nombre de Usuario</label>
                    <input
                        type="text"
                        value={formData.username}
                        onChange={(e) => setFormData({...formData, username: e.target.value})}
                        className="bg-white/10 border border-white/30 p-3 w-full rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
                        placeholder="Nombre de usuario"
                        required
                    />
                </div>
                
                <div>
                    <label className="block text-white font-medium mb-2">Contraseña</label>
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="bg-white/10 border border-white/30 p-3 w-full rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
                        placeholder="Contraseña segura"
                        required
                        minLength={6}
                    />
                </div>
                
                <div>
                    <label className="block text-white font-medium mb-2">Rol</label>
                    <select
                        value={formData.rol}
                        onChange={(e) => setFormData({...formData, rol: e.target.value})}
                        className="bg-white/10 border border-white/30 p-3 w-full rounded-lg text-white focus:outline-none focus:border-blue-400"
                        required
                    >
                        <option value="admin" className="bg-blue-900 text-white">Administrador</option>
                        <option value="user" className="bg-blue-900 text-white">Usuario</option>
                        <option value="editor" className="bg-blue-900 text-white">Editor</option>
                    </select>
                </div>
                
                <div className="flex justify-center pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-green-500 hover:bg-green-600 disabled:bg-gray-500 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
                    >
                        {loading ? 'Creando...' : 'Crear Usuario'}
                    </button>
                </div>
            </form>
        </div>
    )
}