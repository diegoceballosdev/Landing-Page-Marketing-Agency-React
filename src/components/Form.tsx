import { Button } from './Button';

export const Form = () => {
    return (
        <div id='contacto' className="absolute top-[-160px] xl:top-[-130px] left-0 right-0 mx-auto mb-[300px] text-center px-6 py-10 bg-Navy-850 rounded-lg w-[336px] md:w-[520px] xl:w-[920px]">

            <h2 className="font-bold mb-4 text-[1.25rem] md:text-3xl">Contactanos y empeza la transformación de tu negocio</h2>

            <p className="text-sm mb-8 md:text-base xl:px-12">Dejanos tu correo y te escribiremos para un diagnóstico inicial con oportunidades de mejora y una propuesta de acción.</p>
            <form action="" className="flex flex-col gap-6 xl:flex-row">

                <input className="bg-white rounded-3xl text-center h-12 placeholder:text-gray-400 text-gray-700 xl:flex-1" type="email" placeholder="email@example.com" />

                <Button text="Enviar" styles="xl:w-[200px]" />

            </form>
        </div>
    );
}