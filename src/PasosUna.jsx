const PasosUna = () => {
    return (
      <div className="bg-pink-300 p-4">
        <h1 className="text-center text-2xl font-bold mb-4">Primer paso</h1>
        <p className="text-center mb-8">Este es el primer paso</p>
        <div className="w-4/6 mx-auto grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-md shadow-md text-center">
            <h2 className="text-xl font-bold mb-2">Box 1</h2>
            <p>Content for box 1</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md text-center">
            <h2 className="text-xl font-bold mb-2">Box 2</h2>
            <p>Content for box 2</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md text-center">
            <h2 className="text-xl font-bold mb-2">Box 3</h2>
            <p>Content for box 3</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default PasosUna;