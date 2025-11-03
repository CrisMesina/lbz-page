import React, { use, useState } from 'react'
import { Navegador } from '../assets/components/Navegador'

export const Formulario = () => {

    const [formData, setFormData] = useState({
        title: '',
        txtMuestra: '',
        body: '',
        author: '',
        fecha: ''
    });

    const [imagen, setImagen] = useState(null);
    const [loading, setLoading] = useState(false);

    // Límites de caracteres para cada campo
    const limits = {
        title: 100,
        txtMuestra: 200,
        body: 5000,
        author: 50
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleImageChange = (e) => {
        setImagen(e.target.files[0]);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true);

        try{
            const formDataToSend = new FormData();

            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            })

            if(imagen){
                formDataToSend.append('imagen', imagen);
            }

            const response = await fetch('http://localhost:3000/noticias', {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.json();

            if(response.ok){
                alert('Noticia agregada con exito');
                console.log('Success:', result);

                setFormData({
                    title: '',
                    txtMuestra: '',
                    body: '',
                    author: '',
                    fecha: ''
                });
                setImagen(null);
            }else{
                console.error('Error al agregar la noticia:', result);
                alert('Error al agregar la noticia');
            }
        }catch(err){
            console.error('Error al enviar el formulario', err);
        }finally{
            setLoading(false);
        }
    }

    return (
        <>
            <div>
                <div>
                    <Navegador/>
                </div>
                <div className='min-h-screen flex justify-center text-black  items-center'>

                    <form onSubmit={handleSubmit} encType="multipart/form-data" className='bg-white p-6 rounded-lg shadow-md mb-8'>
                        <div className='mb-4'>
                            <label className='block text-gray-700'>Título</label>
                            <input
                                type='text'
                                value={formData.title}
                                onChange={(e) => {
                                    if (e.target.value.length <= limits.title) {
                                        setFormData({...formData, title: e.target.value})
                                    }
                                }}
                                className='border border-gray-300 p-2 w-full'
                                maxLength={limits.title}
                            />
                            <div className='text-sm text-gray-500 mt-1'>
                                {formData.title.length}/{limits.title} caracteres
                                <span className={formData.title.length > limits.title * 0.9 ? 'text-red-500 ml-2' : 'text-green-500 ml-2'}>
                                    ({limits.title - formData.title.length} restantes)
                                </span>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700'>Cuerpo</label>
                            <textarea
                                value={formData.body}
                                onChange={(e) => {
                                    if (e.target.value.length <= limits.body) {
                                        setFormData({...formData, body: e.target.value})
                                    }
                                }}
                                className='border border-gray-300 p-2 w-full h-32'
                                maxLength={limits.body}
                            />
                            <div className='text-sm text-gray-500 mt-1'>
                                {formData.body.length}/{limits.body} caracteres
                                <span className={formData.body.length > limits.body * 0.9 ? 'text-red-500 ml-2' : 'text-green-500 ml-2'}>
                                    ({limits.body - formData.body.length} restantes)
                                </span>
                            </div>
                        </div>
                        <div className='mb-4'>
                        <div className='mb-4'>
                            <label className='block text-gray-700'>Autor</label>
                            <input
                                type='text'
                                value={formData.author}
                                onChange={(e) => {
                                    if (e.target.value.length <= limits.author) {
                                        setFormData({...formData, author: e.target.value})
                                    }
                                }}
                                className='border border-gray-300 p-2 w-full'
                                maxLength={limits.author}
                            />
                            <div className='text-sm text-gray-500 mt-1'>
                                {formData.author.length}/{limits.author} caracteres
                                <span className={formData.author.length > limits.author * 0.9 ? 'text-red-500 ml-2' : 'text-green-500 ml-2'}>
                                    ({limits.author - formData.author.length} restantes)
                                </span>
                            </div>
                        </div>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700'>Fecha</label>
                            <input
                                type='date'
                                value={formData.fecha}
                                onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                                className='border border-gray-300 p-2 w-full'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700'>Texto de Muestra</label>
                            <input
                                type='text'
                                value={formData.txtMuestra}
                                onChange={(e) => {
                                    if (e.target.value.length <= limits.txtMuestra) {
                                        setFormData({...formData, txtMuestra: e.target.value})
                                    }
                                }}
                                className='border border-gray-300 p-2 w-full'
                                maxLength={limits.txtMuestra}
                            />
                            <div className='text-sm text-gray-500 mt-1'>
                                {formData.txtMuestra.length}/{limits.txtMuestra} caracteres
                                <span className={formData.txtMuestra.length > limits.txtMuestra * 0.9 ? 'text-red-500 ml-2' : 'text-green-500 ml-2'}>
                                    ({limits.txtMuestra - formData.txtMuestra.length} restantes)
                                </span>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700'>Imagen</label>
                            <input
                                type='file'
                                onChange={(e) => setImagen(e.target.files[0])}
                                className='border border-gray-300 p-2 w-full'
                            />
                        </div>
                        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Agregar Noticia</button>
                    </form>

                </div>

            </div>
        </>
    )
}
