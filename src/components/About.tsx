import { Code2, Palette, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and optimized code following best practices.',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful, responsive interfaces with Glassmorphism and modern aesthetics.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency using Next.js and React best practices.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Experienced in working with Agile teams, Git/GitHub, and streamlining workflows.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-bg relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About Me
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Front-End Developer with <span className="text-blue-600 dark:text-blue-400 font-semibold">3+ years of experience</span> building modern, responsive, and scalable web apps. 
              Proficient in <span className="text-gray-900 dark:text-white font-medium">HTML5, CSS3, Tailwind CSS, Sass</span>, and CSS Animations.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Advanced in <span className="text-gray-900 dark:text-white font-medium">JavaScript, TypeScript, React.js, and Next.js</span>, with strong state management using Redux Toolkit. 
              Skilled in OOP, RESTful APIs, and integration/testing with Postman.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Experienced in Git, GitHub, and Agile teams. Focused on writing clean, optimized code and delivering top-notch user experiences.
              I manage full-lifecycles of projects from design to deployment.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="w-full h-full rounded-xl bg-white dark:bg-dark-card flex items-center justify-center">
                <Code2 className="w-32 h-32 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gray-50 dark:glass hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group border border-gray-100 dark:border-white/5"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
