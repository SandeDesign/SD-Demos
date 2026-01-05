import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Award, Leaf, ShoppingCart } from 'lucide-react';
import { Layout } from '../components/Layout';
import { restaurantProConfig } from '../config';
import { MenuItem } from '../types';

export const Menu = () => {
  const config = restaurantProConfig;
  const baseUrl = '/demo/restaurant-pro';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showVegetarianOnly, setShowVegetarianOnly] = useState(false);

  const filterItems = (items: MenuItem[]) => {
    return items.filter(item => !showVegetarianOnly || item.vegetarian);
  };

  const allCategories = [
    { id: 'all', name: 'Alles', icon: '🍽️' },
    ...config.menuCategories
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Ons Menu
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
            Ontdek onze verfijnde selectie van culinaire meesterwerken,
            bereid met passie en de beste ingrediënten
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[120px] z-40 bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
              <Filter className="w-5 h-5 text-gray-600 flex-shrink-0" />
              <div className="flex gap-2">
                {allCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                      selectedCategory === category.id
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Vegetarian Filter */}
            <button
              onClick={() => setShowVegetarianOnly(!showVegetarianOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition ${
                showVegetarianOnly
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Leaf className="w-5 h-5" />
              Alleen Vegetarisch
            </button>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          {selectedCategory === 'all' ? (
            // Show all categories
            <>
              {config.menuCategories.map((category) => {
                const filteredItems = filterItems(category.items);
                if (filteredItems.length === 0) return null;

                return (
                  <div key={category.id} className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="text-5xl">{category.icon}</span>
                      <h2 className="text-4xl font-bold text-gray-900">
                        {category.name}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredItems.map((item) => (
                        <MenuItem key={item.id} item={item} baseUrl={baseUrl} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            // Show selected category
            <>
              {config.menuCategories
                .filter(cat => cat.id === selectedCategory)
                .map((category) => {
                  const filteredItems = filterItems(category.items);

                  return (
                    <div key={category.id}>
                      <div className="flex items-center gap-3 mb-8">
                        <span className="text-5xl">{category.icon}</span>
                        <h2 className="text-4xl font-bold text-gray-900">
                          {category.name}
                        </h2>
                      </div>

                      {filteredItems.length === 0 ? (
                        <div className="text-center py-12">
                          <p className="text-xl text-gray-600">
                            Geen vegetarische gerechten in deze categorie
                          </p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {filteredItems.map((item) => (
                            <MenuItem key={item.id} item={item} baseUrl={baseUrl} />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Klaar Om Te Bestellen?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bestel nu online voor thuisbezorging of afhaal
          </p>
          <Link
            to={`${baseUrl}/order`}
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition"
          >
            <ShoppingCart className="w-5 h-5" />
            Start Bestelling
          </Link>
        </div>
      </section>
    </Layout>
  );
};

// Menu Item Component
interface MenuItemProps {
  item: MenuItem;
  baseUrl: string;
}

const MenuItem = ({ item, baseUrl }: MenuItemProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="relative h-56">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {item.chefSpecial && (
            <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              <Award className="w-4 h-4" />
              Chef's Special
            </span>
          )}
          {item.vegetarian && (
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              <Leaf className="w-4 h-4" />
              Vegetarisch
            </span>
          )}
          {item.popular && (
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              ⭐ Populair
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 mb-4 min-h-[48px]">
          {item.description}
        </p>

        {item.allergens.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Allergenen:</span> {item.allergens.join(', ')}
            </p>
          </div>
        )}

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <span className="text-2xl font-bold text-amber-600">
              €{item.price.toFixed(2)}
            </span>
            {item.priceBottle && (
              <span className="text-sm text-gray-500 ml-2">
                / €{item.priceBottle.toFixed(2)} fles
              </span>
            )}
          </div>
          <Link
            to={`${baseUrl}/order`}
            state={{ addToCart: item }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-semibold transition inline-flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Bestel
          </Link>
        </div>
      </div>
    </div>
  );
};
