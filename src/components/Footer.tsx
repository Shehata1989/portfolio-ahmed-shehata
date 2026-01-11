import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Brand & Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 max-w-2xl"
          >
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Ahmed<span className="text-gray-900 dark:text-white">.dev</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Crafting beautiful digital experiences with modern web technologies. 
              Always open to new projects and collaborations.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ul className="flex flex-wrap justify-center gap-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/Shehata1989"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:glass hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shehata89"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:glass hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:Shehataa568@gmail.com"
              className="p-3 rounded-full bg-gray-100 dark:glass hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Contact Info Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-sm space-y-1"
          >
            <p>Alexandria, Egypt</p>
            <p>+20 128 689 8625</p>
            <div className="flex items-center justify-center gap-1 mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              <span className="text-green-600 dark:text-green-400 font-medium">Available for work</span>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Ahmed Shehata. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
