const Porcentajes = () => {
  return (
    <div className="container mx-auto p-4 h-4/5 flex items-center justify-center" style={{ backgroundImage: "url('https://www.unaxuna.com/images/numbers-banner-cta/background-numbers-banner-cta.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-2/3">
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-gray-200 bg-opacity-75 p-4 rounded-md text-center aspect-square">
            <div className="text-4xl font-bold">90%</div>
            <div className="text-sm">Matemáticas</div>
          </div>
          <div className="bg-gray-200 bg-opacity-75 p-4 rounded-md text-center aspect-square">
            <div className="text-4xl font-bold">85%</div>
            <div className="text-sm">Ciencias</div>
          </div>
          <div className="bg-gray-200 bg-opacity-75 p-4 rounded-md text-center aspect-square">
            <div className="text-4xl font-bold">88%</div>
            <div className="text-sm">Historia</div>
          </div>
          <div className="bg-gray-200 bg-opacity-75 p-4 rounded-md text-center aspect-square">
            <div className="text-4xl font-bold">92%</div>
            <div className="text-sm">Lengua</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-gray-200 bg-opacity-75 p-4 rounded-md text-center aspect-square">
            <div className="text-4xl font-bold">80%</div>
            <div className="text-sm">Geografía</div>
          </div>
          <div className="bg-gray-200 bg-opacity-75 p-4 rounded-md text-center aspect-square">
            <div className="text-4xl font-bold">87%</div>
            <div className="text-sm">Arte</div>
          </div>
          <div className="bg-gray-200 bg-opacity-75 p-4 rounded-md text-center aspect-square">
            <div className="text-4xl font-bold">93%</div>
            <div className="text-sm">Educación Física</div>
          </div>
        </div>
        <div className="bg-gray-200 bg-opacity-75 p-4 rounded-md flex justify-between items-center">
  <div className="text-left">
    <p>¿Tu mamá ya se realizó su mamografía anual preventiva? ¿y tu hermana? ¿tu novia? ¿tu compañera de trabajo?</p>
  </div>
  <div className="text-right">
    <button className="bg-pink-300 hover:bg-pink-400 text-fuchsia-900 font-bold py-2 px-4 rounded">
      ANOTALA ¡AHORA!
    </button>
    <p className="mt-2">Y la llamamos para programar su turno con el Centro de imágenes que ella prefiera. </p>
  </div>
</div>
      </div>
    </div>
  );
}

export default Porcentajes;