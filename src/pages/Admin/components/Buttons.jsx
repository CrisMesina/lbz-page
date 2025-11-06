
export const Buttons = ({ setActiveContent }) => {

    const openNoticias = () => {
        setActiveContent('formulario');
    }

    const openUsuarios = () => {
        setActiveContent('usuarios');
    }

    const crearUsuario = () => {
        setActiveContent('formulario-usuario');
    }

    const listarNoticias = () => {
        setActiveContent('noticias');
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <button 
                    onClick={openNoticias}
                    className="flex items-center justify-center bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 rounded-lg p-4 text-white transition-all duration-200"
                >
                    <span className="font-medium">Crear Noticia</span>
                </button>
                
                <button 
                    onClick={crearUsuario}
                    className="flex items-center justify-center bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 rounded-lg p-4 text-white transition-all duration-200"
                >
                    <span className="font-medium">Crear Usuario</span>
                </button>
                
                <button 
                    onClick={openUsuarios}
                    className="flex items-center justify-center bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/30 rounded-lg p-4 text-white transition-all duration-200"
                >
                    <span className="font-medium">Ver Usuarios</span>
                </button>

                <button 
                    onClick={listarNoticias}
                    className="flex items-center justify-center bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 rounded-lg p-4 text-white transition-all duration-200"
                >
                    <span className="font-medium">Ver Noticias</span>
                </button>
            </div>
        </div>
    )
}