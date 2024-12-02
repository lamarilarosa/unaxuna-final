const ImageRow2 = () => {
    // Local image paths (assuming they're in the "public/images" folder)
    const images = [
      "/src/assets/footer/logo-wakapi.svg",
    ];
  
    return (
      <div className="bg-fuchsia-800 flex justify-center items-center space-x-6 py-11 text-pink-300">
        <p>Desarrollado por</p>
        {images.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} className="h-auto w-auto" />
        ))}
  </div>
    );
  };
  
  export default ImageRow2;