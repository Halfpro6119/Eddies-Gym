import ProductCard from '@/components/ProductCard';

const Merchandise = () => {
  const products = [
    {
      id: 'boxing-gloves-eddies',
      name: 'Eddies Gym Boxing Gloves',
      price: 59.99,
      image: '/Merchandise/eddies_gym_gloves.jpeg',
      sizes: ['12oz', '14oz', '16oz'],
    },
    {
      id: 'hoodie-eddies',
      name: 'Eddies Gym Hoodie',
      price: 39.99,
      image: '/Merchandise/eddies_gym_hoodie_front.jpeg',
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      id: 'cap-eddies',
      name: 'Eddies Gym Cap',
      price: 19.99,
      image: '/Merchandise/eddies_gym_cap.jpeg',
    },
    {
      id: 'beanie-eddies',
      name: 'Eddies Gym Beanie',
      price: 14.99,
      image: '/Merchandise/eddies_gym_beanie.jpeg',
    },
    {
      id: 'boxing-gloves-reyes',
      name: 'Reyes Professional Boxing Gloves',
      price: 100.00,
      image: '/Merchandise/reyes_professional_gloves.jpeg',
      sizes: ['12oz', '16oz'],
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
            Train in Official <span className="text-red-600">Eddies Gym</span> Gear
          </h1>
          <p className="text-xl text-neutral-300">
            Check out our official boxing gloves, apparel, and accessories
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                sizes={product.sizes}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">
            Get Your <span className="text-red-600">Gear Today</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Train like a champion with official Eddie's Gym merchandise. Premium quality, designed
            for fighters by fighters.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Merchandise;
