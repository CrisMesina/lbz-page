
export const Malla = () => {
    
    const tercero = [
        {
            ramo: "Manejo de suelo y residuos"
        },
        {
            ramo: "Manejo de técnicas de riego"
        },
        {
            ramo: "Técnicas de reproducción vegetal"
        },
        {
            ramo: "Alimentación y pesaje pecuario",
        },
        {
            ramo: "Control de plagas y enfermedades"
        }
    ]

    const cuarto = [
        {
            ramo: "Manejo de suelo y residuos"
        },
        {
            ramo: "Manejo de técnicas de riego"
        },
        {
            ramo: "Técnicas de reproducción vegetal"
        },
        {
            ramo: "Alimentación y pesaje pecuario",
        },
        {
            ramo: "Control de plagas y enfermedades"
        }
    ]
    
    return (
        <>
            <div>
                <h1 className='text-center my-5 font-bold text-2xl underline'>Malla Curricular</h1>
                <div className="grid grid-cols-1 gap-4 p-5">
                    <div className="shadow-xl rounded-b-2xl mb-10">
                        <h1 className="text-center font-bold text-2xl italic">Tercer Año</h1>
                        <div className="flex flex-col md:flex-row justify-center items-center my-20 gap-4">
                            {tercero.map((t, i) =>(
                                <div className="w-60 h-40 mx-auto flex text-center border-t-2 border-b-2 border-t-green-300 border-b-green-700 hover:scale-105 hover:shadow-green-200 hover:font-bold shadow-lg rounded-2xl ">
                                    <p className="mx-auto my-auto">{t.ramo}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="shadow-xl rounded-b-2xl mb-10">
                        <h1 className="text-center font-bold text-2xl italic">Cuarto Año</h1>
                        <div className="flex flex-col md:flex-row justify-center items-center my-20 gap-4">
                            {cuarto.map((t, i) =>(
                                <div className="w-60 h-40 mx-auto flex text-center border-t-2 border-b-2 border-t-green-300 border-b-green-700 hover:scale-105 hover:shadow-green-200 hover:font-bold shadow-lg rounded-2xl ">
                                    <p className="mx-auto my-auto">{t.ramo}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    }
