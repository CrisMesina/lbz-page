import React, { useState } from 'react'

export const Formulario = () => {
    const [formData, setFormData] = useState({
        title: '',
        txtMuestra: '',
        body: '',
        author: '',
        fecha: ''
    })

    const [imagen, setImagen] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const formDataToSend = new FormData()
            

            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key])
            })
            

            if (imagen) {
                formDataToSend.append('imagen', imagen)
            }

            const response = await fetch('http://localhost:3000/noticias', {
                method: 'POST',
                body: formDataToSend 
            })

            if (response.ok) {
                alert('Noticia creada exitosamente')
                setFormData({
                    title: '',
                    txtMuestra: '',
                    body: '',
                    author: '',
                    fecha: ''
                })
                setImagen(null)

                const fileInput = document.querySelector('input[type="file"]')
                if (fileInput) fileInput.value = ''
            } else {
                alert('Error al crear la noticia')
            }
        } catch (error) {
            console.error('Error:', error)
            alert('Error de conexión')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="text-white">
            <h2 className="text-2xl font-bold mb-6">Crear Nueva Noticia</h2>
            
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-white font-medium mb-2">Título</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({...formData, title: e.target.value})}
                            className="bg-white/10 border border-white/30 p-3 w-full rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
                            placeholder="Título de la noticia"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-white font-medium mb-2">Autor</label>
                        <input
                            type="text"
                            value={formData.author}
                            onChange={(e) => setFormData({...formData, author: e.target.value})}
                            className="bg-white/10 border border-white/30 p-3 w-full rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
                            placeholder="Nombre del autor"
                            required
                        />
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-white font-medium mb-2">Fecha</label>
                        <input
                            type="date"
                            value={formData.fecha}
                            onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                            className="bg-white/10 border border-white/30 p-3 w-full rounded-lg text-white focus:outline-none focus:border-blue-400"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-white font-medium mb-2">Texto de Muestra</label>
                        <textarea
                            value={formData.txtMuestra}
                            onChange={(e) => setFormData({...formData, txtMuestra: e.target.value})}
                            className="bg-white/10 border border-white/30 p-3 w-full h-20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 resize-none"
                            placeholder="Descripción breve"
                            required
                        />
                    </div>
                </div>
                
                <div>
                    <label className="block text-white font-medium mb-2">Contenido</label>
                    <textarea
                        value={formData.body}
                        onChange={(e) => setFormData({...formData, body: e.target.value})}
                        className="bg-white/10 border border-white/30 p-3 w-full h-32 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 resize-none"
                        placeholder="Contenido completo de la noticia"
                        required
                    />
                </div>
                
                <div>
                    <label className="block text-white font-medium mb-2">Imagen</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImagen(e.target.files[0])}
                        className="bg-white/10 border border-white/30 p-3 w-full rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 file:cursor-pointer"
                    />
                    {imagen && (
                        <div className="mt-2 text-sm text-white/80">
                            Archivo seleccionado: {imagen.name}
                        </div>
                    )}
                </div>
                
                <div className="flex justify-center pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
                    >
                        {loading ? 'Creando...' : 'Crear Noticia'}
                    </button>
                </div>
            </form>
        </div>
    )
}