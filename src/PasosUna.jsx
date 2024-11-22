const PasosUna = () => {
    return (
      <div className="bg-pink-300 p-4">
        <div className="w-4/6 mx-auto grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-md shadow-md text-center">
            <h2 className="text-xl font-bold mb-2">Una x una</h2>
            <p>Es una campaña de amor y solidaridad que busca ayudar a prevenir el cáncer de mamas en dos pasos. </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md text-center">
            <h2 className="text-xl font-bold mb-2">El paso 1 es un acto de amor.</h2>
            <p>Inscribí en una x una a las mujeres que querés cuidar y prevenir del cáncer de mamas. Anotalas para su mamografía anual preventiva. El 90% de los casos detectados a tiempo tienen cura.Podés anotar tantas mujeres como quieras. La única condición es que vivan en Mendoza.</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md text-center">
            <h2 className="text-xl font-bold mb-2">El paso 2 es pura solidaridad.</h2>
            <p>Voluntarios de FUNDAVITA llamarán a todas las mujeres inscriptas para programar el turno de su mamografía. Las mujeres sin cobertura médica podrán realizar su estudio gracias a la donación de Del Plata Salud + la comunidad mendocina.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default PasosUna;