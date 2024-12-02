const ImageRow = () => {
  // Local image paths (assuming they're in the "public/images" folder)
  const images = [
    "/src/assets/footer/logo-aveno.svg",
    "/src/assets/footer/logo-bagovit.svg",
    "/src/assets/footer/logo-cepage.svg",
    "/src/assets/footer/logo-cetaphil.svg",
    "/src/assets/footer/logo-dermaglos.svg",
    "/src/assets/footer/logo-eucerin.svg",
    "/src/assets/footer/logo-eximia.svg",
    "/src/assets/footer/logo-renuar.svg",
    "/src/assets/footer/logo-urecrem.svg",
  ];

  return (
    <div className="bg-fuchsia-800 flex justify-center items-center space-x-16">
      {images.map((src, index) => (
      <img key={index} src={src} alt={`Image ${index + 1}`} className="h-16 w-16" />
      ))}
</div>
  );
};

export default ImageRow;
