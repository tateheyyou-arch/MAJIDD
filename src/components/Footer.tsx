import { Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">MAJID FASKAOUI</h3>
            <p className="text-gray-400">
              Model • Actor • Filmmaker • Creative Director
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-gray-900 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Majid Faskaoui. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
