const NuestraLucha = () => {
  return (
    <div className="bg-fuchsia-800 text-center text-pink-300 p-10">
      <p className="text-5xl py-6 font-bold">Esta lucha es 100% nuestra.</p>
      <p className="text-2xl pt-2">Compartí a todos tus contactos y sumalos a la misión de UNA X UNA </p>
        <p className="text-2xl pt-4 font-bold">La única forma de detener la muerte por cáncer de mamas es <br /> cumplir con la mamografía anual preventiva.
        </p>
        <div className="flex flex-row justify-center gap-10 pt-10">
        <img src="src/assets/icon-instagram.svg" alt="" />
        <img src="src/assets/icon-facebook.svg" alt="" />
        <img src="src/assets/icon-mail.svg" alt="" />
        <img src="src/assets/icon-whatsapp.svg" alt="" />
        </div>
    </div>
  );
}

export default NuestraLucha;