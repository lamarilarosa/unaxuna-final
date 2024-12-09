const Porcentajes = () => {
  return (
    <div className="container mx-auto p-4 h-4/5 flex items-center justify-center" style={{ backgroundImage: "url('src/assets/background-numbers-banner-cta.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'screen' }}>
      <div className="w-2/3">
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-pink-300 hover:bg-fuchsia-800 p-4 rounded-md text-center aspect-square group">
            <div className="text-4xl font-bold text-fuchsia-800 group-hover:text-pink-300">235</div>
            <div className="text-sm text-white font-bold">Mujeres cumplieron con su mamografía anual preventiva.</div>
          </div>
          <div className="bg-pink-300 hover:bg-fuchsia-800 p-4 rounded-md text-center aspect-square group">
            <div className="text-4xl font-bold text-fuchsia-800 group-hover:text-pink-300">0%</div>
            <div className="text-sm text-white font-bold">De las mamografías se realizaron gracias a las donaciones.</div>
          </div>
          <div className="bg-pink-300 hover:bg-fuchsia-800 p-4 rounded-md text-center aspect-square group">
            <div className="text-4xl font-bold text-fuchsia-800 group-hover:text-pink-300">95%</div>
            <div className="text-sm text-white font-bold">De los estudios muestran resultados normales.</div>
          </div>
          <div className="bg-pink-300 hover:bg-fuchsia-800 p-4 rounded-md text-center aspect-square group">
            <div className="text-4xl font-bold text-fuchsia-800 group-hover:text-pink-300">4%</div>
            <div className="text-sm text-white font-bold">De los estudios muestran presencia de anomalías.</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="bg-pink-300 hover:bg-fuchsia-800 p-4 rounded-md text-center aspect-square group">
            <div className="text-4xl font-bold text-fuchsia-800 group-hover:text-pink-300">100%</div>
            <div className="text-sm text-white font-bold">De las mujeres se realizaron la mamografía por primera vez.</div>
          </div>
          <div className="bg-pink-300 hover:bg-fuchsia-800 p-4 rounded-md text-center aspect-square group">
            <div className="text-4xl font-bold text-fuchsia-800 group-hover:text-pink-300">87%</div>
            <div className="text-sm text-white font-bold">Se hicieron el estudio por compromiso con quien las anotó.</div>
          </div>
          <div className="bg-pink-300 hover:bg-fuchsia-800 p-4 rounded-md text-center aspect-square group">
            <div className="text-4xl font-bold text-fuchsia-800 group-hover:text-pink-300">93%</div>
            <div className="text-sm text-white font-bold">De las mujeres se compromete a repetir el estudio en 2024.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Porcentajes;