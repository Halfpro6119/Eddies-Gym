const Gallery = () => {
  const images = [
    {
      url: '/GalleryPhotos/fight_1.jpg',
      alt: 'Boxing fight - Round in action',
    },
    {
      url: '/GalleryPhotos/fight_2.jpg',
      alt: 'Boxing fight - Intense competition',
    },
    {
      url: '/GalleryPhotos/fight_3.jpg',
      alt: 'Boxing fight - Championship bout',
    },
    {
      url: '/GalleryPhotos/fight_4.jpg',
      alt: 'Boxing fight - Competition day',
    },
    {
      url: '/GalleryPhotos/fight_5.jpg',
      alt: 'Boxing fight - In the ring',
    },
    {
      url: '/GalleryPhotos/gym_1.jpg',
      alt: 'Eddies Gym - Training facility',
    },
    {
      url: '/GalleryPhotos/gym_2.jpg',
      alt: 'Eddies Gym - Equipment and space',
    },
    {
      url: '/GalleryPhotos/spar_1.jpg',
      alt: 'Sparring session - Training partners',
    },
    {
      url: '/GalleryPhotos/spar_2.jpg',
      alt: 'Sparring session - Practice and technique',
    },
    {
      url: '/GalleryPhotos/train_1.jpg',
      alt: 'Training session - Building skills',
    },
    {
      url: '/GalleryPhotos/train_2.jpg',
      alt: 'Training session - Hard work and dedication',
    },
  ];

  return (
    <div className="bg-neutral-900 min-h-screen">
      <section
        className="relative h-[300px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(/eddies_gym_gallery.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-4">
            Our <span className="text-red-600">Gallery</span>
          </h1>
          <p className="text-xl text-neutral-300">See the Eddies Gym experience</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-80 overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-12 w-12 border-2 border-white rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
            Join Our <span className="text-red-600">Community</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
            Experience the energy, dedication, and camaraderie that makes Eddie's Gym more than just a gym.
            Follow us on social media to see daily updates from our training sessions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
