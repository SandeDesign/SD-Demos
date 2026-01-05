import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Clock, Truck } from 'lucide-react';
import { Layout } from '../components/Layout';
import { restaurantProConfig } from '../config';
import { CartItem, MenuItem } from '../types';

export const Order = () => {
  const config = restaurantProConfig;
  const baseUrl = '/demo/restaurant-pro';
  const location = useLocation();

  const [cart, setCart] = useState<CartItem[]>([]);
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [showCheckout, setShowCheckout] = useState(false);

  // Add item from menu if passed via state
  useEffect(() => {
    if (location.state?.addToCart) {
      const item = location.state.addToCart as MenuItem;
      addToCart(item);
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(itemId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = deliveryMethod === 'delivery' ? 4.50 : 0;
  const total = subtotal + deliveryFee;

  return (
    <Layout cartItemCount={cart.length}>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            {cart.length > 0 ? 'Uw Bestelling' : 'Winkelwagen'}
          </h1>

          {cart.length === 0 ? (
            // Empty Cart
            <div className="max-w-2xl mx-auto text-center py-16">
              <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Uw winkelwagen is leeg
              </h2>
              <p className="text-gray-600 mb-8">
                Voeg heerlijke gerechten toe aan uw bestelling
              </p>
              <Link
                to={`${baseUrl}/menu`}
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition"
              >
                Bekijk Menu
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
                  >
                    <div className="flex gap-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-32 h-32 object-cover rounded-xl flex-shrink-0"
                      />
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {item.name}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 p-2 transition"
                            aria-label="Verwijder item"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3 bg-gray-100 rounded-full p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="bg-white hover:bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center transition"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-semibold text-gray-900 w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="bg-white hover:bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center transition"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <span className="text-2xl font-bold text-amber-600">
                            €{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <Link
                  to={`${baseUrl}/menu`}
                  className="block text-center py-4 text-amber-600 hover:text-amber-700 font-semibold transition"
                >
                  + Voeg meer gerechten toe
                </Link>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Bestelling Overzicht
                  </h2>

                  {/* Delivery Method */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Bezorgmethode</h3>
                    <div className="space-y-3">
                      <button
                        onClick={() => setDeliveryMethod('delivery')}
                        className={`w-full p-4 rounded-xl border-2 transition ${
                          deliveryMethod === 'delivery'
                            ? 'border-amber-600 bg-amber-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Truck className={`w-6 h-6 ${
                            deliveryMethod === 'delivery' ? 'text-amber-600' : 'text-gray-600'
                          }`} />
                          <div className="text-left flex-grow">
                            <p className="font-semibold text-gray-900">Bezorgen</p>
                            <p className="text-sm text-gray-600">30-45 min • €4.50</p>
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => setDeliveryMethod('pickup')}
                        className={`w-full p-4 rounded-xl border-2 transition ${
                          deliveryMethod === 'pickup'
                            ? 'border-amber-600 bg-amber-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Clock className={`w-6 h-6 ${
                            deliveryMethod === 'pickup' ? 'text-amber-600' : 'text-gray-600'
                          }`} />
                          <div className="text-left flex-grow">
                            <p className="font-semibold text-gray-900">Afhalen</p>
                            <p className="text-sm text-gray-600">15-20 min • Gratis</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6 pb-6 border-b">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotaal</span>
                      <span>€{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Bezorgkosten</span>
                      <span>{deliveryFee === 0 ? 'Gratis' : `€${deliveryFee.toFixed(2)}`}</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-xl font-bold text-gray-900 mb-6">
                    <span>Totaal</span>
                    <span className="text-amber-600">€{total.toFixed(2)}</span>
                  </div>

                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-full font-semibold text-lg transition flex items-center justify-center gap-2"
                  >
                    Naar Checkout
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Demo functionaliteit - geen echte betaling vereist
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Checkout Modal Demo */}
          {showCheckout && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Checkout Demo
                </h3>
                <p className="text-gray-600 mb-6">
                  Dit is een demo van het checkout proces. In een echte implementatie zou hier een betaalformulier verschijnen met adresgegevens en betalingsmethodes.
                </p>
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-semibold">✓ Bestelling succesvol geplaatst!</p>
                    <p className="text-green-700 text-sm mt-1">Totaal: €{total.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowCheckout(false);
                      setCart([]);
                    }}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-semibold transition"
                  >
                    Sluit Demo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
