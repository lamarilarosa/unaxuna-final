import { useState } from 'react';

const PreguntasFrecuentes = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex pl-20 pr-20 bg-fuchsia-800">
      <div className="w-1/3 p-4 bg-gray-200">
        <h2 className="text-xl font-bold mb-4">Información</h2>
        <p>Este es un texto de ejemplo. Puedes reemplazar este texto con cualquier contenido que desees.</p>
      </div>
      <div className="w-2/3 p-4">
        <h1 className="text-2xl font-bold mb-4">Preguntas Frecuentes</h1>
        <div className="accordion">
          {['¿Cómo funciona el servicio?', '¿Cómo me registro?', '¿Puedo cambiar mi plan de suscripción?', '¿Cuánto cuesta el servicio?', '¿Cómo cancelo mi suscripción?', '¿Puedo obtener un reembolso?', '¿Cómo contacto al soporte?'].map((question, index) => (
            <div key={index} className="mb-2">
              <button
                className="w-full text-left p-2 bg-pink-300 hover:bg-pink-400 text-fuchsia-900 font-bold rounded"
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