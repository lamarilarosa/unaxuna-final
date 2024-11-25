import { useState } from 'react';

const FormularioExpandible = () => {
  const [name, setName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [additionalFieldsVisible, setAdditionalFieldsVisible] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setAdditionalFieldsVisible(true);
  };

  const isFormValid = name && selectedOption && additionalFieldsVisible;

  return (
    <div className="bg-pink-300 p-4 font-sans">
      <div className='text-center'>
      <h1 className="text-4xl font-light mb-4 text-gray-600">UNA X UNA NOS PONE EN ACCIÓN PARA GANARLE AL CÁNCER DE MAMAS. </h1></div>
      
      
      
      <div className="w-4/6 mx-auto mt-8 bg-white p-4 shadow-md rounded-3xl px-44 py-16">
        <form>
          <h2 className="text-center text-2xl font-bold mb-4">Anotá en este formulario a quien todavía no se hizo su mamografía anual.</h2>
          <h3 className="text-center text-2xl font-bold mb-4">Prevengamos el cáncer entre todas. </h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Mi nombre es:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="options">
            Y quiero inscribir en una x una a:
            </label>
            <select
              id="options"
              value={selectedOption}
              onChange={handleOptionChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Elegir</option>
              <option value="option1">¡A mi misma!</option>
              <option value="option1">Mi mamá</option>
              <option value="option2">Mi hermana</option>
              <option value="option3">Mi abuela</option>
            </select>
          </div>
          {additionalFieldsVisible && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additional1">
                  Additional Field 1
                </label>
                <input
                  type="text"
                  id="additional1"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additional2">
                  Additional Field 2
                </label>
                <input
                  type="text"
                  id="additional2"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </>
          )}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 px-4 font-bold text-white rounded ${isFormValid ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
          >
            Send form
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioExpandible;