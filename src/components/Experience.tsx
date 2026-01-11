import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'IT Specialist & Web Developer',
      company: 'Brilliance Academy',
      period: '2021 - Present',
      description: 'Full-stack contributor developing and maintaining the school website. Managing classroom hardware/software and providing technical support.',
      achievements: [
        'Developed school website using HTML, CSS, JS, and React.',
        'Designed user-friendly responsive interfaces.',
        'Collaborated with administration for custom digital tools.',
        'Managed classroom hardware/software and network.',
      ],
    },
{
  type: 'education',
  title: "Bachelor's Degree in Computer Science and Information Systems",
  company: 'The Higher Institute of Computer Science',
  period: 'Graduated',
  description:
    'Bachelor’s degree focused on computer science and information systems, covering software development, databases, networks, and system analysis.',
  achievements: [
    'Studied core computer science subjects including programming, data structures, and algorithms',
    'Worked on academic projects involving web development and database design',
    'Gained foundational knowledge in networks, operating systems, and information systems',
    'Applied problem-solving and analytical thinking in practical coursework',
  ],
},
{
  type: 'certificate',
  title: 'Front-End Developer Certification',
  company: 'Certification',
  period: '',
  description:
    'Comprehensive front-end development certification covering HTML, CSS, JavaScript, React.js, and Next.js with a focus on building responsive, scalable, and user-friendly web applications.',
  achievements: [
    'Built responsive and accessible user interfaces using HTML and CSS',
    'Developed interactive web applications with modern JavaScript (ES6+)',
    'Created reusable components using React.js',
    'Implemented routing and server-side rendering concepts with Next.js',
    'Applied best practices for performance and code organization',
  ],
},
{
  type: 'certificate',
  title: 'Cisco Certified Network Associate (CCNA)',
  company: 'Cisco',
  period: '',
  description:
    'Foundational networking certification focused on network fundamentals, IP connectivity, routing and switching, wireless networking, and basic network security.',
  achievements: [
    'Configured and managed basic routing and switching devices',
    'Understood IP addressing, subnetting, and network protocols',
    'Implemented wireless network fundamentals',
    'Applied basic network security concepts',
  ],
},
{
  type: 'certificate',
  title: 'Cisco Certified Network Professional (CCNP)',
  company: 'Cisco',
  period: '',
  description:
    'Professional-level certification validating advanced skills in designing, implementing, managing, and troubleshooting enterprise networks, including routing, switching, security, and network optimization.',
  achievements: [
    'Designed and managed enterprise-level network infrastructures',
    'Implemented advanced routing and switching protocols',
    'Performed network troubleshooting and performance optimization',
    'Applied network security best practices',
  ],
}
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Experience & Education
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800"></div>

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-20"
                >
                  <div className={`absolute left-0 top-0 w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-dark-bg ${
                    exp.type === 'work' ? 'bg-blue-600' : exp.type === 'education' ? 'bg-purple-600' : 'bg-cyan-600'
                  }`}>
                    {exp.type === 'work' ? (
                      <Briefcase className="w-8 h-8 text-white" />
                    ) : exp.type === 'education' ? (
                      <GraduationCap className="w-8 h-8 text-white" />
                    ) : (
                      <Award className="w-8 h-8 text-white" />
                    )}
                  </div>

                  <div className="bg-gray-50 dark:glass p-6 rounded-xl hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300 border border-gray-100 dark:border-white/5">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium flex-wrap">
                        <span>{exp.company}</span>
                        {exp.period && (
                          <>
                            <span>•</span>
                            <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    {exp.achievements.length > 0 && (
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIdx) => (
                          <li
                            key={achIdx}
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-blue-500">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
