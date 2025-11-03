import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navegador } from '../../assets/components/Navegador';

export const NoticiaDetail = () => {
    
    const {id} = useParams();

    const [noticia, setNoticia] = useState(id);
    

    useEffect(() => {
        const fetchNoticia = async () =>{
            try{
                const response = await fetch(`http://localhost:3000/noticias/${id}`);
                const data = await response.json();
                setNoticia(data);
            }catch(error){
                console.error('Error en la obtencion de la noticia: ', error);
            }
        }

        fetchNoticia();
    }, [id])

    return (
        <>
            <div>
                <Navegador/>
            </div>
            <div className='text-white p-20'>
                <h2 className='font-bold text-4xl text-center'>{noticia.title}</h2>
                <p className='text-end text-sm flex-1'>{noticia.fecha}</p>
                <div className='relative'>
                    <img 
                        src={`http://localhost:3000${noticia.imagen}`} 
                        className='float-left h-96 w-auto mr-6 mb-4 rounded-lg shadow-lg' 
                        alt={noticia.title} 
                    />
                    <p className='text-justify leading-relaxed'>
                        {noticia.body}
                    </p>
                </div>
            </div>
        </>
    )
}
