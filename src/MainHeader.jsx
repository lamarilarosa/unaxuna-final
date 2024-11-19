const MainHeader = () => {
    return (
      <header>
        <div className="hero bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://www.unaxuna.com/images/slider/slide-1.jpg')" }}>
          <div className="h-full flex items-center justify-center">
            <div className="container mx-auto px-4 bg-fuchsia-800 w-4/6 min-h-fit rounded-md">
              <div className="grid grid-cols-3 gap-4 text-white">
                <div className="flex justify-center items-center">
                  <img src="src\assets\logo-unaxuna.svg" alt="Logo 1" className="h-16" />
                </div>
                <div className="flex justify-center items-center">
                  <img src="src\assets\logo-fundavita.svg" alt="Logo 2" className="h-16" />
                </div>
                <div className="flex justify-center items-center">
                  <button className="bg-pink-300 hover:bg-pink-400 text-fuchsia-900 font-bold py-2 px-4 rounded">
                  SUMATE ¡AHORA!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default MainHeader;