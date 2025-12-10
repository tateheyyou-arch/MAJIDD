import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@majidfaskaoui.com',
      href: 'mailto:contact@majidfaskaoui.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, NY',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Available for collaborations, bookings, and creative projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-black mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                    <div className="p-3 bg-black rounded-lg">
                      <Icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      <p className="text-black font-medium">{info.value}</p>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a key={index} href={info.href}>
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            <div className="p-8 bg-black text-white rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Available For</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Fashion Campaigns
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Film Productions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Creative Direction
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Video Editing Projects
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status && (
                <div className="p-4 bg-black text-white rounded-xl text-sm">
                  {status}
                </div>
              )}

              <button
                type="submit"
                className="w-full px-8 py-4 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
