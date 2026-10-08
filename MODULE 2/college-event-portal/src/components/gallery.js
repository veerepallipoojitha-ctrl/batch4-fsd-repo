function Gallery() {
  const images = [
    "https://picsum.photos/400/250?random=1",
    "https://picsum.photos/400/250?random=2",
    "https://picsum.photos/400/250?random=3",
    "https://picsum.photos/400/250?random=4",
    "https://picsum.photos/400/250?random=5",
    "https://picsum.photos/400/250?random=6"
  ];

  return (
    <section className="page-section">

      <h1>📸 Event Gallery</h1>

      <div className="gallery">

        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`College event ${index + 1}`}
          />
        ))}

      </div>

    </section>
  );
}

export default Gallery;