import { Button } from './Button'

export const Hero = () => {
    return (
        <section className="-mt-20 relative z-10 md:w-[450px] xl:w-[650px] mx-auto text-white md:-mt-40 xl:-mt-30">
            <h1 className="text-center text-2xl md:text-4xl font-Raleway font-bold px-2 xl:text-5xl">Impulsamos tu negocio con marketing digital</h1>
            <p className="text-center text-sm mt-6 px-4 md:text-base">Creamos estrategias y campañas enfocadas en resultados. Combinamos creatividad, datos y optimización constante para que tu inversión en marketing se convierta en crecimiento real.</p>

            <div className='text-center mt-6 mb-10'>
                <Button text="Solicitar diagnóstico gratis" styles="w-[300px] xl:text-lg" />
            </div>
        </section>
    );
}