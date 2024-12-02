const PreFooter = () => {
    return (
      <footer className="bg-fuchsia-800 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-left text-xm">
          <div className="p-4"><img src="/src/assets/footer/logo-unaxuna.svg" alt="" />
          </div>
          <div className="p-4">
            <p>UNA X UNA es una iniciativa de Del Plata Salud que tiene como misión facilitar a todas las mujeres mendocinas su mamografía anual preventiva. Gracias al trabajo en conjunto con Fundavita y el desarrollo de Wakapi. </p>
          </div>
          <div className="p-4">
            <p>Más info y consultas: <br /><br />
                hola@unaxuna.com <br />
                +54 9 261 333 0115 <br /><br />
                Sede Fundavita: Salta 1829, Planta Baja, Ciudad, Mendoza, Argentina

</p>
          </div>
          <div className="p-4">
            <p>¡Seguínos! </p>
            <div className="flex flex-row space-x-5">
                <img src="/src/assets/footer/icon-facebook.svg" alt="" />
            <img src="/src/assets/footer/icon-instagram.svg" alt="" />
            <img src="/src/assets/footer/icon-twitter.svg" alt="" />
            </div>
            
          </div>
        </div>
      </footer>
    );
  };
  
  export default PreFooter;