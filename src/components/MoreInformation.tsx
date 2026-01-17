export const MoreInformation = () => {
  return (
    <div id="nosotros" className="my-40 space-y-2 md:flex md:items-center md:gap-10 max-w-[920px] mx-auto">

      <img className="md:w-[380px]" src="/images/illustration-stay-productive.png" alt="illustration stay productive" />

      <div>
        <h2 className="font-bold mb-4 md:text-3xl">Somos tu equipo de marketing, sin vueltas</h2>

        <p className="text-sm mb-4 md:text-base">Somos una agencia enfocada en resultados. Nos apasiona construir marcas con presencia sólida y campañas que generen ventas.</p>

        <p className="text-sm mb-4 md:text-base">Trabajamos con procesos simples, comunicación directa y una mentalidad de mejora constante. Si buscás un equipo que se comprometa de verdad con el crecimiento de tu negocio, estás en el lugar correcto.</p>

        <a href="#" className=" text-Teal-200 flex items-center gap-2 hover:underline">
          <p>Más sobre nosotros</p>
          <img src="/images/icon-arrow.svg" alt="icon arrow" />
        </a>
      </div>
    </div>
  )
}