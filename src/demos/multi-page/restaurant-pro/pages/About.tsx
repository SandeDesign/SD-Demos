import { Award, Heart, Users, TrendingUp } from 'lucide-react';
import { Layout } from '../components/Layout';
import { restaurantProConfig } from '../config';

export const About = () => {
  const config = restaurantProConfig;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1600&h=800&fit=crop"
            alt="Chef"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {config.about.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Passie voor perfectie sinds 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ons Verhaal
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {config.about.story}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {config.about.mission}
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb4c?w=800&h=600&fit=crop"
                alt="Restaurant Interior"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Onderscheidingen & Erkenningen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trots op onze prestaties en de erkenning van experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {config.about.awards.map((award, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{award.split(' ')[0]}</div>
                <p className="text-gray-900 font-semibold">
                  {award.substring(award.indexOf(' ') + 1)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb4c?w=800&h=800&fit=crop"
                alt="Chef Jean-Pierre"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ontmoet Chef Jean-Pierre
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Met meer dan 20 jaar ervaring in de haute cuisine brengt Chef Jean-Pierre
                een unieke visie naar La Belle Cuisine. Zijn passie voor authentieke Franse
                kookkunst gecombineerd met moderne innovatie resulteert in gerechten die
                zowel klassiek als verrassend zijn.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Opgeleid in Lyon en met ervaring in sterrenrestaurants door heel Europa,
                heeft hij zijn droom waargemaakt met La Belle Cuisine: een plek waar
                traditie en creativiteit samenkomen.
              </p>
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-amber-600" />
                <div>
                  <p className="font-semibold text-gray-900">Chef of the Year 2022</p>
                  <p className="text-gray-600">Nederlandse Gastronomie Vereniging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Onze Waarden
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              De principes die ons dagelijks werk vormgeven
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Excellence',
                description: 'Streven naar perfectie in elk gerecht'
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: 'Passie',
                description: 'Liefde voor gastronomie en onze gasten'
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Gemeenschap',
                description: 'Samen bouwen aan culinaire ervaringen'
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'Innovatie',
                description: 'Continue verbetering en creativiteit'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-amber-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ons Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ontmoet de talentvolle professionals achter uw ervaring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Jean-Pierre Laurent',
                role: 'Head Chef',
                image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop'
              },
              {
                name: 'Marie Dubois',
                role: 'Sous Chef',
                image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=400&h=400&fit=crop'
              },
              {
                name: 'Lucas van der Berg',
                role: 'Sommelier',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
              }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-semibold">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
