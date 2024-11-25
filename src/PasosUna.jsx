const PasosUna = () => {
    return (
      <div className="bg-pink-300 pt-24 pb-24">
        <div className="w-4/6 mx-auto grid grid-cols-3 gap-4">
          <div className="p-4 rounded-md shadow-md bg-fuchsia-800 text-left">
          <img src="src/assets/logo-unaxuna-clean.svg" alt="Una x una" className="mb-2 object-contain" />
            <p className="text-pink-300">Es una campaña de amor y solidaridad que busca ayudar a prevenir el cáncer de mamas en dos pasos. </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md text-left py-16">
          <h1 className="text-5xl mb-2 bg-fuchsia-800 rounded-full w-16 h-16 flex items-center justify-center text-white font-thin">1</h1>
            <h2 className="text-xl font-bold mb-2 pt-6 text-fuchsia-800">El paso 1 es un acto de amor.</h2>
            <p>Inscribí en una x una a las mujeres que querés cuidar y prevenir del cáncer de mamas. Anotalas para su mamografía anual preventiva. El 90% de los casos detectados a tiempo tienen cura.Podés anotar tantas mujeres como quieras. La única condición es que vivan en Mendoza.</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md text-left py-16">
            <div className="relative">
            <h1 className="text-5xl mb-2 bg-fuchsia-800 rounded-full w-16 h-16 flex items-center justify-center text-white font-thin">2</h1>
            <img src="src/assets/Fundavita-Iso.svg" alt="Logo" className="absolute top-0 right-0 w-24 h-24" />
            </div>
            <h2 className="text-xl font-bold mb-2 pt-6 text-fuchsia-800">El paso 2 es pura solidaridad.</h2>
            <p className="text-gray-500">Voluntarios de FUNDAVITA llamarán a todas las mujeres inscriptas para programar el turno de su mamografía. Las mujeres sin cobertura médica podrán realizar su estudio gracias a la donación de Del Plata Salud + la comunidad mendocina.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default PasosUna;