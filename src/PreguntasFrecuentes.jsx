import { useState } from 'react';

const PreguntasFrecuentes = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex pl-20 pr-20 bg-fuchsia-800" style={{ backgroundImage: "url('https://www.unaxuna.com/images/faq/background-faq.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      
      <div className="w-1/3 p-4 bg-fuchsia-800 text-white my-44">
        <h2 className="text-xl font-bold mb-4">Preguntas frecuentes </h2>
        <p className='pb-5'>Te dejamos aquí algunas respuestas.</p>
        <ul><li>Para más info: hola@unaxuna.com +54 9 261 333 0115</li><li>Sede Fundavita: Salta 1829, Planta Baja, Ciudad, Mendoza, Argentina</li></ul>
      </div>
      <div className="w-2/3 pl-5 pt-20">
  
        <div className="accordion">
          {['¿Qué es UNA X UNA?', 'No tengo cobertura médica ¿puedo registrarme?', 'Si tengo cobertura médica ¿puedo registrarme?', '¿Puedo inscribir a una mujer menor de 40 años?', '¿Hasta cuando están abiertas las inscripciones?', '¿Una x una es una campaña exclusiva para mendocinas?', '¿Cómo puedo donar dinero a la campaña?'].map((question, index) => (
            <div key={index} className="mb-2">
              <button
                className="w-full text-left p-2 bg-white hover:bg-gray-200 text-gray-700 font-normal rounded"
                onClick={() => toggleAccordion(index)}
              >
                {question}
              </button>
              {activeIndex === index && (
                <div className="p-2 bg-gray-100">
                  <p>Respuesta a la pregunta: {question}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;