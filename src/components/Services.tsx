import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Camera, Film, Video, Users } from 'lucide-react';

export default function Services() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const services = [
    {
      icon: Camera,
      title: 'Fashion Modeling',
      description:
        'High-fashion runway, editorial shoots, and commercial campaigns for leading brands and designers.',
      features: ['Runway', 'Editorial', 'Commercial', 'Catalog'],
    },
    {
      icon: Film,
      title: 'Acting',
      description:
        'Professional acting services for film, television, commercials, and digital content production.',
      features: ['Feature Films', 'TV Series', 'Commercials', 'Web Series'],
    },
    {
      icon: Video,
      title: 'Filmmaking',
      description:
        'Complete filmmaking services from concept to final delivery, including directing and cinematography.',
      features: ['Direction', 'Cinematography', 'Production', 'Storytelling'],
    },
    {
      icon: Users,
      title: 'Video Editing',
      description:
        'Professional video editing and post-production for all types of content and commercial projects.',
      features: ['Color Grading', 'Sound Design', 'VFX', 'Final Cut'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive creative services tailored to bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-8 border-2 border-gray-100 rounded-2xl hover:border-black transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-black rounded-xl">
                    <Icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
