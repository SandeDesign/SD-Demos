import { useState } from 'react';
import { Search, Clock, Eye, Heart, TrendingUp, Calendar, User, Tag } from 'lucide-react';
import { BackButton } from '../../../components/BackButton';
import { blogMagazineConfig } from './config';

export const BlogMagazineDemo = () => {
  const config = blogMagazineConfig;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const filteredArticles = config.articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = config.articles.filter(a => a.featured);
  const article = selectedArticle ? config.articles.find(a => a.id === selectedArticle) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <BackButton />
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-blue-600">{config.name}</h1>
              <p className="text-gray-600">{config.tagline}</p>
            </div>

            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Zoek artikelen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-blue-600 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Categories */}
      <section className="bg-white border-b sticky top-[88px] z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {config.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat.id
                    ? `${cat.color} text-white`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles - Hero Section */}
      {selectedCategory === 'all' && !searchQuery && (
        <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              Uitgelichte Artikelen
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles[0] && (
                <div
                  onClick={() => setSelectedArticle(featuredArticles[0].id)}
                  className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-1"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img
                      src={featuredArticles[0].image}
                      alt={featuredArticles[0].title}
                      className="w-full h-80 md:h-full object-cover"
                    />
                    <div className="p-8 flex flex-col justify-center">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                        {config.categories.find(c => c.id === featuredArticles[0].category)?.name}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {featuredArticles[0].title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {featuredArticles[0].excerpt}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <img
                            src={featuredArticles[0].author.avatar}
                            alt={featuredArticles[0].author.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <span>{featuredArticles[0].author.name}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredArticles[0].readTime} min
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {(featuredArticles[0].views / 1000).toFixed(1)}k
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {featuredArticles.slice(1, 3).map((article) => (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article.id)}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {config.categories.find(c => c.id === article.category)?.name}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime} min
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {(article.views / 1000).toFixed(1)}k
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Articles */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">
                {searchQuery ? `Zoekresultaten voor "${searchQuery}"` :
                 selectedCategory === 'all' ? 'Alle Artikelen' :
                 config.categories.find(c => c.id === selectedCategory)?.name}
              </h2>

              <div className="space-y-6">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => setSelectedArticle(article.id)}
                    className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 sm:h-full object-cover"
                      />
                      <div className="sm:col-span-2 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`${config.categories.find(c => c.id === article.category)?.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                            {config.categories.find(c => c.id === article.category)?.icon} {config.categories.find(c => c.id === article.category)?.name}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <img
                              src={article.author.avatar}
                              alt={article.author.name}
                              className="w-6 h-6 rounded-full"
                            />
                            <span>{article.author.name}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readTime} min
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {article.likes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredArticles.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-xl text-gray-500">Geen artikelen gevonden</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending Topics */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Trending Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {config.trending.map((topic, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm cursor-pointer transition"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Popular Articles */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Meest Gelezen</h3>
                <div className="space-y-4">
                  {config.articles.slice(0, 3).map((article, idx) => (
                    <div
                      key={article.id}
                      onClick={() => setSelectedArticle(article.id)}
                      className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition"
                    >
                      <span className="text-3xl font-bold text-gray-200">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="font-semibold text-sm mb-1 line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Eye className="w-3 h-3" />
                          {(article.views / 1000).toFixed(1)}k views
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && article && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full my-8">
            <img src={article.image} alt={article.title} className="w-full h-96 object-cover rounded-t-2xl" />

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4">
                <span className={`${config.categories.find(c => c.id === article.category)?.color} text-white px-4 py-2 rounded-full font-semibold`}>
                  {config.categories.find(c => c.id === article.category)?.icon} {config.categories.find(c => c.id === article.category)?.name}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b">
                <div className="flex items-center gap-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{article.author.name}</p>
                    <p className="text-sm text-gray-500">{article.author.bio}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(article.publishedAt).toLocaleDateString('nl-NL')}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime} min leestijd
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {article.views.toLocaleString()} views
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  {article.excerpt}
                </p>
                <p className="text-gray-600 mt-4">
                  Dit is een demo artikel. In een echte implementatie zou hier de volledige artikelinhoud staan met opmaak, afbeeldingen, code snippets en meer.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-3">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Sluit Artikel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">{config.name}</h3>
          <p className="text-gray-400 mb-6">{config.tagline}</p>
          <p className="text-gray-500 text-sm">
            © 2024 {config.name}. Professional Blog Platform met Categorieën & Zoekfunctie.
          </p>
        </div>
      </footer>
    </div>
  );
};

export { blogMagazineConfig } from './config';
