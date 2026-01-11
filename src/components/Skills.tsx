import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        'React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 
        'HTML5', 'CSS3', 'Tailwind CSS', 'Sass', 'CSS Animations'
      ],
    },
    {
      category: 'Tools & Architecture',
      skills: [
        'Redux Toolkit', 'RESTful APIs', 'Git & GitHub', 
        'Postman', 'OOP', 'Responsive Design', 'Vite'
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of modern technologies and tools I use to build exceptional web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white dark:glass p-8 rounded-2xl shadow-lg dark:shadow-none hover:shadow-xl dark:hover:bg-white/5 transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-gray-700 pb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + (skillIdx * 0.05) }}
                    className="px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500 dark:hover:border-blue-500/50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
