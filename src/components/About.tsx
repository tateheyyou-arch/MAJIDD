import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Award, Film, Camera, Sparkles } from 'lucide-react';

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const achievements = [
    {
      icon: Camera,
      title: 'Professional Model',
      description: 'High-fashion campaigns and editorial work with leading brands',
    },
    {
      icon: Film,
      title: 'Skilled Actor',
      description: 'Versatile performances across film, television, and digital media',
    },
    {
      icon: Sparkles,
      title: 'Creative Filmmaker',
      description: 'Award-winning director and cinematographer',
    },
    {
      icon: Award,
      title: 'Expert Editor',
      description: 'Professional video editing and post-production services',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            About Me
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            A multifaceted creative professional with expertise in modeling, acting,
            filmmaking, and video editing. Dedicated to bringing artistic visions to
            life through compelling visual storytelling and authentic performances.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-6">
                  <Icon
                    className="text-black group-hover:text-white transition-colors"
                    size={40}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
