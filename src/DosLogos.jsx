const ImageRow1 = () => {
    // Local image paths (assuming they're in the "public/images" folder)
    const images = [
      "/src/assets/footer/logo-del-plata.svg",
      "/src/assets/footer/logo-fundavita.svg",
    ];
  
    return (
      <div className="bg-fuchsia-800 flex flex-col justify-center items-center space-y-6 py-11 text-white">
        <p className="text-center text-3xl">una x una es posible gracias al compromiso de: </p>
        <div className="flex justify-center items-center space-x-6">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Image ${index + 1}`} className="h-auto w-auto" />
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageRow1;