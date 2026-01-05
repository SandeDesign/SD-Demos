import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Award } from 'lucide-react';
import { Layout } from '../components/Layout';
import { restaurantProConfig } from '../config';

export const Home = () => {
  const config = restaurantProConfig;
  const baseUrl = '/demo/restaurant-pro';

  // Get popular dishes from all categories
  const popularDishes = config.menuCategories
    .flatMap(cat => cat.items.filter(item => item.popular))
    .slice(0, 6);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={config.hero.image}
            alt={config.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {config.hero.title}
          </h1>
          <h2 className="text-6xl md:text-8xl font-bold text-amber-400 mb-6">
            {config.hero.highlight}
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {config.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`${baseUrl}/reservations`}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition flex items-center justify-center gap-2"
            >
              {config.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={`${baseUrl}/menu`}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg transition"
            >
              {config.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Waarom Kiezen Voor Ons?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ontdek wat ons restaurant uniek maakt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Onze Populaire Gerechten
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ontdek de favorieten van onze gasten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                  {dish.chefSpecial && (
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      Chef's Special
                    </div>
                  )}
                  {dish.vegetarian && (
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      🌱 Vegetarisch
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {dish.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">
                      €{dish.price.toFixed(2)}
                    </span>
                    <Link
                      to={`${baseUrl}/order`}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-semibold transition"
                    >
                      Bestel Nu
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to={`${baseUrl}/menu`}
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition"
            >
              Bekijk Volledige Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wat Onze Gasten Zeggen
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-2xl font-bold text-gray-900 ml-2">5.0</span>
              <span className="text-gray-600 ml-2">({config.reviews.length} reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {config.reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  {review.verified && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Klaar Voor Een Onvergetelijke Ervaring?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-100">
            Reserveer nu uw tafel of bestel online voor thuisbezorging
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`${baseUrl}/reservations`}
              className="bg-white text-amber-700 hover:bg-amber-50 px-8 py-4 rounded-full font-semibold text-lg transition inline-flex items-center justify-center gap-2"
            >
              Reserveer Tafel
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={`${baseUrl}/order`}
              className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition inline-flex items-center justify-center gap-2"
            >
              Bestel Online
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
