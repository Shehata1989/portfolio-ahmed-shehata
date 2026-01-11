import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ user_name: '', user_email: '', message: '' });
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Shehataa568@gmail.com',
      link: 'mailto:Shehataa568@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 128 689 8625',
      link: 'tel:+201286898625',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Alexandria, Egypt',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Get In Touch
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Talk
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Feel free to reach out through the form or contact
                information below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:glass hover:bg-gray-50 dark:hover:bg-white/10 transition-colors group border border-gray-100 dark:border-white/5"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form 
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit} 
            className="space-y-6 bg-white dark:glass p-8 rounded-2xl shadow-lg dark:shadow-none border border-gray-100 dark:border-white/5"
          >
            <div>
              <label
                htmlFor="user_name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                value={formData.user_name}
                onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-bg/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="user_email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                value={formData.user_email}
                onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-bg/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-bg/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none outline-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-medium transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-600 dark:text-green-400 text-center font-medium">
                Message sent successfully! Thank you for reaching out.
              </p>
            )}
            
            {submitStatus === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-center font-medium">
                Failed to send message. Please check the console or try again later.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
