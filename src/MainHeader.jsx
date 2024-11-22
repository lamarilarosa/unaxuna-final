const MainHeader = () => {
  return (
    <header>
      <div className="bg-fuchsia-800 h-20 flex items-center justify-center">
        <button className="bg-pink-300 hover:bg-pink-400 text-fuchsia-900 font-bold py-2 px-4 rounded mr-4">
          QUIERO DONAR
        </button>
        <span className="text-white text-lg">
          Para las mamografías de las mujeres que no tienen cobertura médica
        </span>
      </div>
      <div className="bg-black bg-opacity-50 pl-20 pr-20 h-20 flex items-center justify-between px-4 fixed w-full z-10">
        <img src="src/assets/logo-wakapi.svg" alt="Generic Logo" className="h-8" />
        <div className="flex space-x-4">
          <img src="src/assets/logo-fundavita-horizontal.svg" alt="Logo 1" className="h-8" />
          <img src="src/assets/logo-del-plata.svg" alt="Logo 2" className="h-8" />
        </div>
      </div>
      <div className="hero bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://www.unaxuna.com/images/slider/slide-1.jpg')" }}>
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4 bg-fuchsia-800 w-4/6 min-h-fit rounded-2xl">
            <div className="grid grid-cols-3 gap-4 text-white relative">
              <div className="flex justify-center items-center relative">
                <img src="src/assets/logo-unaxuna.svg" alt="Logo 1" className="absolute -top-8" />
              </div>
              <div className="flex justify-center items-center col-span-1">
                <img src="src/assets/logo-fundavita.svg" alt="Logo 2" className="absolute -top-4" />
              </div>
              <div className="flex flex-col justify-end items-center col-span-1">
                <div className="flex space-x-1 absolute -top-4">
                  {Array.from("00000").map((digit, index) => (
                    <div key={index} className="bg-white text-black text-4xl font-bold rounded-md px-2">
                      {digit}
                    </div>
                  ))}
                </div>
                <p className="mt-2 py-4 text-center">Mendocinas ya están en lista de espera para programar un turno para su mamografía anual preventiva.</p>
                <button className="bg-pink-300 hover:bg-pink-400 text-fuchsia-900 font-bold py-2 px-4 rounded mt-2">
                  SUMATE ¡AHORA!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;