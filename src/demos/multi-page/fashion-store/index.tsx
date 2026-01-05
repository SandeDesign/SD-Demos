import { useState } from 'react';
import { ShoppingCart, Heart, Star, Filter, X, Check } from 'lucide-react';
import { BackButton } from '../../../components/BackButton';
import { fashionStoreConfig } from './config';
import { Product, CartItem } from './types';

export const FashionStoreDemo = () => {
  const config = fashionStoreConfig;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = selectedCategory === 'all'
    ? config.products
    : config.products.filter(p => p.category === selectedCategory);

  const addToCart = (product: Product, size: string, color: string) => {
    const cartItem: CartItem = {
      ...product,
      quantity: 1,
      selectedSize: size,
      selectedColor: color,
    };
    setCart([...cart, cartItem]);
    setSelectedProduct(null);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <BackButton />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">{config.name}</h1>
            <button
              onClick={() => setShowCart(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[500px] bg-gradient-to-r from-purple-900 to-pink-900 text-white flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">Spring Collection 2024</h2>
          <p className="text-xl md:text-2xl mb-8">Premium Fashion voor Iedereen</p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
            Shop Nu
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {config.features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-2">{feature.icon}</div>
                <h3 className="font-bold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Onze Collectie</h2>

          {/* Category Filter */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-600 flex-shrink-0" />
            {config.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative h-80">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  {product.new && (
                    <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      NIEUW
                    </span>
                  )}
                  {product.bestseller && (
                    <span className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      BESTSELLER
                    </span>
                  )}
                  <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full hover:bg-red-50 transition">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">€{product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through">€{product.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold">{selectedProduct.name}</h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full rounded-xl"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(selectedProduct.rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">({selectedProduct.reviews} reviews)</span>
                  </div>

                  <p className="text-gray-700 mb-6">{selectedProduct.description}</p>

                  <div className="mb-6">
                    <p className="font-semibold mb-2">Maten:</p>
                    <div className="flex gap-2">
                      {selectedProduct.sizes.map((size) => (
                        <button
                          key={size}
                          className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-900 transition"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="font-semibold mb-2">Kleuren:</p>
                    <div className="flex gap-2">
                      {selectedProduct.colors.map((color) => (
                        <button
                          key={color}
                          className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-900 transition"
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-bold">€{selectedProduct.price.toFixed(2)}</span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xl text-gray-400 line-through">
                        €{selectedProduct.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => addToCart(
                      selectedProduct,
                      selectedProduct.sizes[0],
                      selectedProduct.colors[0]
                    )}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-full font-semibold text-lg transition flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Toevoegen aan Winkelwagen
                  </button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    ✓ Gratis verzending boven €50 | ✓ 30 dagen retourrecht
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shopping Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Winkelwagen ({cart.length})</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-xl text-gray-600">Uw winkelwagen is leeg</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item, idx) => (
                      <div key={idx} className="flex gap-4 border-b pb-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                        <div className="flex-grow">
                          <h3 className="font-bold">{item.name}</h3>
                          <p className="text-sm text-gray-600">
                            {item.selectedSize} | {item.selectedColor}
                          </p>
                          <p className="font-bold mt-1">€{item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Totaal:</span>
                      <span>€{cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      alert('Demo Checkout - Bestelling succesvol geplaatst!');
                      setCart([]);
                      setShowCart(false);
                    }}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full font-semibold text-lg transition flex items-center justify-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    Afrekenen (Demo)
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">{config.name}</h3>
          <p className="text-gray-400 mb-4">{config.tagline}</p>
          <p className="text-gray-500 text-sm">
            © 2024 {config.name}. Multi-page E-commerce Demo met winkelwagen & checkout functionaliteit.
          </p>
        </div>
      </footer>
    </div>
  );
};

export { fashionStoreConfig } from './config';
