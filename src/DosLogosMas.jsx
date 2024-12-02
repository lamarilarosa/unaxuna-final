const ImageRow3 = () => {
    // Local image paths (assuming they're in the "public/images" folder)
    const images = [
      "/src/assets/footer/logo-crocco-prono.png",
      "/src/assets/footer/logo-imagen-diagnostica.png",
    ];
  
    return (
      <div className="bg-fuchsia-800 flex justify-center items-center space-x-6 py-11">
        {images.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} className="h-auto w-auto" />
        ))}
  </div>
    );
  };
  
  export default ImageRow3;