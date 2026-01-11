import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
        {
      title: 'To-Do List App React',
      description: 'Task management app allowing creating, editing, and deleting tasks with a user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
      tags: ['React JS', 'Tailwind CSS', 'DOM Manipulation'],
      github: 'https://github.com/Shehata1989/ToDosList-react',
      demo: 'https://todoslist-react-v1.netlify.app/',
    },
    {
      title: 'Prayer Times App',
      description: 'Built with React and Material-UI, using Aladhan API for accurate Islamic prayer times. Features custom error handling and responsive UI.',
      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=800',
      tags: ['React JS', 'Material-UI', 'API Integration'],
      github: 'https://github.com/Shehata1989/api_prayer_times',
      demo: 'https://gentle-kangaroo-be6d5a.netlify.app/',
    },
    {
      title: 'The Weather App',
      description: 'Real-time weather data for selected cities using OpenWeather API. Features temperature, conditions, and icons.',
      image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&q=80&w=800',
      tags: ['React', 'TypeScript', 'Tailwind', 'Axios'],
      github: 'https://github.com/Shehata1989/the-weather',
      demo: 'https://the-weather11.netlify.app/',
    },
    {
      title: 'Dashboard Interface',
      description: 'User-friendly dashboard for managing tasks, activities, and metrics. Includes Settings, Profile, Projects, and Friend pages.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tags: ['HTML', 'Sass', 'Responsive Design'],
      github: 'https://github.com/Shehata1989/Template-4-Shehata',
      demo: 'https://template-4-shehata.netlify.app/',
    },
    {
      title: 'Mentum Portfolio',
      description: 'Fully responsive multi-section website template for creative professionals. Includes Portfolio, Services, Pricing, and Contact.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
      tags: ['Responsive Design', 'UI/UX', 'Portfolio'],
      github: 'https://github.com/Shehata1989/Template_Mentum',
      demo: 'https://temoplate-mentum.netlify.app/',
    },
    {
      title: 'Kasper Template',
      description: 'Modern, clean, and fully responsive website template aimed at improving front-end skills through practical application.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      tags: ['HTML', 'CSS', 'Responsive Design'],
      github: 'https://github.com/Shehata1989/We-Are-Kasper-Template-2',
      demo: 'https://template-2-shehata.netlify.app/',
    },
    {
      title: 'Business Template',
      description: 'Visually appealing, modular, and responsive website template ideal for businesses and creatives.',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
      tags: ['HTML', 'CSS', 'Web Design'],
      github: 'https://github.com/Shehata1989/Template-3-Shehata',
      demo: 'https://template-3-shehata.netlify.app/',
    },
    {
      title: 'Manage Landing Page',
      description: 'Modern landing page for team collaboration tool with dedicated sections for benefits, testimonials, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      tags: ['Landing Page', 'UI/UX', 'Responsive'],
      github: 'https://github.com/Shehata1989/manage-landing-page',
      demo: 'https://manage-landing-page-master12.netlify.app/',
    },
    {
      title: 'Clipboard Landing Page',
      description: 'Clean and functional landing page for a snippet tracking tool, emphasizing simplicity and aesthetics.',
      image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800',
      tags: ['Landing Page', 'CSS', 'HTML'],
      github: 'https://github.com/Shehata1989/clipboard-landing-page-master',
      demo: 'https://clipboard-landing-page-master12.netlify.app/',
    },
    {
      title: 'To-Do List App',
      description: 'Task management app allowing creating, editing, and deleting tasks with a user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
      tags: ['JavaScript', 'Tailwind CSS', 'DOM Manipulation'],
      github: 'https://github.com/Shehata1989/To_Do_Lists',
      demo: 'https://to-do-lists13.netlify.app/',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my work in Front-End Development, from complex React apps to responsive templates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white dark:glass rounded-2xl overflow-hidden hover:shadow-2xl dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-white/5"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-dark-bg rounded-full hover:scale-110 transition-transform"
                    title="View Code"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform"
                    title="View Demo"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
