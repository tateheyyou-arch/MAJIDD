import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';

export default function Portfolio() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'modeling', label: 'Modeling' },
    { id: 'acting', label: 'Acting' },
    { id: 'filmmaking', label: 'Filmmaking' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Fashion Editorial',
      category: 'modeling',
      image: '/img_0404.jpg',
    },
    {
      id: 2,
      title: 'Professional Portrait',
      category: 'modeling',
      image: '/img_0406.jpg',
    },
    {
      id: 3,
      title: 'Artistic Shoot',
      category: 'acting',
      image: '/img_0420.png',
    },
    {
      id: 4,
      title: 'Urban Editorial',
      category: 'modeling',
      image: '/img_0422.png',
    },
    {
      id: 5,
      title: 'High Fashion Statement',
      category: 'modeling',
      image: '/img_0427.png',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Portfolio
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A selection of recent work showcasing versatility across multiple creative
            disciplines
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === cat.id
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200 capitalize">
                    {project.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
