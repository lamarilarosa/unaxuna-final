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
      <div className="w-4/6 mx-auto mt-8 bg-white p-4 rounded-md shadow-md">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
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
              Select an option
            </label>
            <select
              id="options"
              value={selectedOption}
              onChange={handleOptionChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
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