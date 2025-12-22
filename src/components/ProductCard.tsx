import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  sizes?: string[];
}

const ProductCard = ({ name, price, image, sizes }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState<string>(sizes ? sizes[0] : '');

  const handleAddToCart = () => {
    console.log(`Added ${name}${selectedSize ? ` - ${selectedSize}` : ''} to cart`);
  };

  return (
    <div className="bg-black border border-neutral-800 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-red-600/20 transition-shadow duration-300 group">
      <div className="relative h-64 overflow-hidden bg-neutral-900">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-bold uppercase text-white mb-2">{name}</h3>
          <p className="text-2xl font-black text-red-600">£{price.toFixed(2)}</p>
        </div>

        {sizes && sizes.length > 0 && (
          <div>
            <p className="text-sm text-neutral-400 mb-2">Size:</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                    selectedSize === size
                      ? 'bg-red-600 text-white'
                      : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <Button
          onClick={handleAddToCart}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
