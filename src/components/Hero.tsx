import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            MAJID FASKAOUI
          </motion.h1>

          <motion.div
            className="flex flex-wrap justify-center gap-4 text-lg sm:text-xl text-gray-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span>Model</span>
            <span className="text-gray-300">•</span>
            <span>Actor</span>
            <span className="text-gray-300">•</span>
            <span>Filmmaker</span>
            <span className="text-gray-300">•</span>
            <span>Creative Director</span>
          </motion.div>

          <motion.p
            className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Professional portfolio showcasing high-fashion modeling, cinematic acting,
            innovative filmmaking, and creative direction.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#portfolio"
              className="px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105 shadow-lg"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-50 transition-all hover:scale-105 border-2 border-black"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <ArrowDown className="text-gray-400" size={32} />
        </motion.a>
      </div>
    </section>
  );
}
