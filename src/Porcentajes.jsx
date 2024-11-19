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
        <div className="bg-gray-200 bg-opacity-75 p-4 rounded-md text-center">
          <p className="text-lg">This is a banner with some dummy text. You can replace this text with any content you like.</p>
        </div>
      </div>
    </div>
  );
}

export default Porcentajes;