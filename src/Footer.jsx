const Footer = () => {
    return (
      <footer className="bg-fuchsia-900 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center text-xs">
          <div className="p-4">
            <p>Copyright © 2023 Farmacias Del Plata </p>
          </div>
          <div className="p-4">
            <p>Fundavita, Fundación para la Vida y <br />
            contra el Cáncer </p>
          </div>
          <div className="p-4">
            <p>UNA X UNA es una idea original de <br /> @somosfuentes
</p>
          </div>
          <div className="p-4">
            <p>Política de privacidad </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;