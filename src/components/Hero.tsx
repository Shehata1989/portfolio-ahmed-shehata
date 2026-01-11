import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-dark-bg">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-medium tracking-wide">
              Hi, I'm
            </h2>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-gray-900 dark:text-white">
              <span className="block sm:inline">Ahmed</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Shehata</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-400 mt-4">
              Front-End Developer
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Building modern, responsive, and scalable web apps with <span className="text-blue-600 dark:text-blue-400 font-semibold">React.js</span>, <span className="text-purple-600 dark:text-purple-400 font-semibold">Next.js</span>, and <span className="text-cyan-600 dark:text-cyan-400 font-semibold">TailwindCSS</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white dark:glass text-gray-900 dark:text-white rounded-full font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-all hover:scale-105 border border-gray-200 dark:border-white/10"
            >
              View Work
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-6 pt-8"
          >
            <a
              href="https://github.com/Shehata1989"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:glass hover:bg-gray-50 dark:hover:bg-white/10 transition-all hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white border border-gray-200 dark:border-white/10"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/shehata89"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:glass hover:bg-gray-50 dark:hover:bg-white/10 transition-all hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white border border-gray-200 dark:border-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:Shehataa568@gmail.com"
              className="p-3 rounded-full bg-white dark:glass hover:bg-gray-50 dark:hover:bg-white/10 transition-all hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white border border-gray-200 dark:border-white/10"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-12 animate-bounce"
          >
            <ArrowDown className="w-6 h-6 mx-auto text-gray-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
