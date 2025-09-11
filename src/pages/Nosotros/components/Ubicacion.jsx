import React from 'react'

export const Ubicacion = () => {
    return(
        <>
            <div>
                <div>
                    <div>
                        <h1 className='text-center text-5xl font-bold'>¿Donde estamos ubicados?</h1>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.47130434629!2d-71.08303377806432!3d-34.28805822051213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96637a331fddf08d%3A0x8b0d2825f6e1a70b!2sLiceo%20Polit%C3%A9cnico%20Berta%20Zamorano%20Lizana!5e0!3m2!1ses-419!2scl!4v1757596733620!5m2!1ses-419!2scl" className='w-full min-h-screen p-10' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}
