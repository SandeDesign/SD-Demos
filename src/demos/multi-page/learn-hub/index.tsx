import { useState } from 'react';
import {
  BookOpen, Play, CheckCircle, Clock, Users, Star,
  Search, Filter, Award, TrendingUp, BarChart, Home
} from 'lucide-react';
import { BackButton } from '../../../components/BackButton';
import { learnHubConfig } from './config';
import { Course } from './types';

export const LearnHubDemo = () => {
  const config = learnHubConfig;
  const [activeTab, setActiveTab] = useState<'browse' | 'mycourses' | 'progress'>('mycourses');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const myCourses = config.courses.filter(c => c.enrolled);
  const browseCourses = config.courses.filter(c => !c.enrolled);

  const filteredCourses = (activeTab === 'mycourses' ? myCourses : browseCourses).filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <BackButton />

      {/* Top Navigation */}
      <nav className="bg-white border-b border-indigo-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {config.name}
                </h1>
                <p className="text-sm text-gray-500">{config.tagline}</p>
              </div>
            </div>

            {/* Search */}
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Zoek cursussen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Award className="w-5 h-5 text-gray-600" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                JD
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-6 mt-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('mycourses')}
              className={`pb-3 px-2 font-medium transition relative ${
                activeTab === 'mycourses'
                  ? 'text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Mijn Cursussen
              </div>
              {activeTab === 'mycourses' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('browse')}
              className={`pb-3 px-2 font-medium transition relative ${
                activeTab === 'browse'
                  ? 'text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Browse Cursussen
              </div>
              {activeTab === 'browse' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('progress')}
              className={`pb-3 px-2 font-medium transition relative ${
                activeTab === 'progress'
                  ? 'text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Mijn Voortgang
              </div>
              {activeTab === 'progress' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"></div>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards - Only on My Courses */}
        {activeTab === 'mycourses' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-indigo-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Actieve Cursussen</p>
                  <p className="text-3xl font-bold text-indigo-600">{myCourses.length}</p>
                </div>
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Uren Geleerd</p>
                  <p className="text-3xl font-bold text-purple-600">24.5</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Certificaten</p>
                  <p className="text-3xl font-bold text-green-600">3</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Gem. Voortgang</p>
                  <p className="text-3xl font-bold text-orange-600">48%</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <BarChart className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Alle Categorieën
          </button>
          {config.categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Progress View */}
        {activeTab === 'progress' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-indigo-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Jouw Leerpad</h2>
              {myCourses.map(course => (
                <div key={course.id} className="mb-6 last:mb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <img src={course.image} alt={course.title} className="w-16 h-16 rounded-lg object-cover" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{course.title}</h3>
                        <p className="text-sm text-gray-500">{course.instructor}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-indigo-600">{course.progress}%</p>
                      <p className="text-xs text-gray-500">voltooid</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-gray-500">{Math.floor((course.progress! / 100) * course.lessons)} / {course.lessons} lessen voltooid</span>
                    <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                      Doorgaan →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Streak */}
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl p-8 text-white shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 mb-2">Leer Streak</p>
                  <p className="text-5xl font-bold">7 dagen</p>
                  <p className="text-orange-100 mt-2">Blijf doorgaan! 🔥</p>
                </div>
                <div className="text-6xl">🎯</div>
              </div>
            </div>
          </div>
        )}

        {/* Course Grid */}
        {activeTab !== 'progress' && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {activeTab === 'mycourses' ? 'Jouw Cursussen' : 'Ontdek Nieuwe Cursussen'}
              </h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition">
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCourse(course)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-indigo-600">
                        {course.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        course.level === 'Beginner' ? 'bg-green-500 text-white' :
                        course.level === 'Intermediate' ? 'bg-orange-500 text-white' :
                        'bg-red-500 text-white'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                    {course.enrolled && course.progress !== undefined && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                        <div className="flex items-center justify-between text-white text-xs mb-1">
                          <span>Voortgang</span>
                          <span className="font-semibold">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-white h-full rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-gray-900 line-clamp-2">{course.title}</h3>

                    <div className="flex items-center gap-2 mb-3">
                      <img src={course.instructorImage} alt={course.instructor} className="w-6 h-6 rounded-full" />
                      <p className="text-sm text-gray-600">{course.instructor}</p>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-900">{course.rating}</span>
                        <span>({course.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                      <span>•</span>
                      <Play className="w-4 h-4" />
                      <span>{course.lessons} lessen</span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-2xl font-bold text-indigo-600">€{course.price}</span>
                      {course.enrolled ? (
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium">
                          Doorgaan
                        </button>
                      ) : (
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium">
                          Inschrijven
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img src={selectedCourse.image} alt={selectedCourse.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition"
              >
                ×
              </button>
              {selectedCourse.enrolled && (
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                    <p className="text-sm font-medium text-gray-600 mb-1">Jouw voortgang</p>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-full rounded-full"
                          style={{ width: `${selectedCourse.progress}%` }}
                        ></div>
                      </div>
                      <span className="font-bold text-indigo-600">{selectedCourse.progress}%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold">
                      {selectedCourse.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      selectedCourse.level === 'Beginner' ? 'bg-green-100 text-green-600' :
                      selectedCourse.level === 'Intermediate' ? 'bg-orange-100 text-orange-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {selectedCourse.level}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-3 text-gray-900">{selectedCourse.title}</h2>
                  <div className="flex items-center gap-3 mb-4">
                    <img src={selectedCourse.instructorImage} alt={selectedCourse.instructor} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-gray-900">{selectedCourse.instructor}</p>
                      <p className="text-sm text-gray-500">Instructeur</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-indigo-600 mb-2">€{selectedCourse.price}</p>
                  {selectedCourse.enrolled ? (
                    <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium">
                      Doorgaan met Leren
                    </button>
                  ) : (
                    <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium">
                      Nu Inschrijven
                    </button>
                  )}
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-lg">{selectedCourse.description}</p>

              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{selectedCourse.rating}</p>
                  <p className="text-sm text-gray-500">{selectedCourse.reviews} reviews</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{selectedCourse.students.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">studenten</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{selectedCourse.duration}</p>
                  <p className="text-sm text-gray-500">video</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <Play className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{selectedCourse.lessons}</p>
                  <p className="text-sm text-gray-500">lessen</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-bold text-xl mb-4 text-gray-900">Wat je leert</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {selectedCourse.enrolled && (
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="font-bold text-xl mb-4 text-gray-900">Curriculum</h3>
                  <div className="space-y-3">
                    {config.modules.map((module, idx) => (
                      <div key={module.id} className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">
                            Module {idx + 1}: {module.title}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {module.lessons.filter(l => l.completed).length}/{module.lessons.length}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {module.lessons.map(lesson => (
                            <div key={lesson.id} className="flex items-center justify-between py-2 text-sm">
                              <div className="flex items-center gap-2">
                                {lesson.completed ? (
                                  <CheckCircle className="w-5 h-5 text-green-500" />
                                ) : (
                                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                                )}
                                <span className={lesson.completed ? 'text-gray-500 line-through' : 'text-gray-900'}>
                                  {lesson.title}
                                </span>
                              </div>
                              <span className="text-gray-500">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
