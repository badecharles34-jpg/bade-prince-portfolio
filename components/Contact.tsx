
'use client';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This is a static site, so the form submission is simulated.
    // In a real application, you would handle form submission here.
    alert('Merci pour votre message! Je vous répondrai bientôt.');
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#121212]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Travaillons ensemble</h2>
          <div className="w-20 h-1 bg-deep-violet mx-auto"></div>
          <p className="max-w-3xl mx-auto mt-4 text-neutral-gray">
            « Vous souhaitez une miniature YouTube professionnelle ou un visuel graphique qui se démarque ? Avec mes 4 ans d’expérience en graphisme, je vous accompagne dans la création de designs performants. »
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="space-y-6">
              <a href="mailto:badeprince89@gmail.com" className="flex items-center gap-4 group">
                <div className="bg-premium-black p-4 rounded-full border border-gray-800 group-hover:border-deep-violet transition-colors">
                  <Mail className="text-deep-violet" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-neutral-gray group-hover:text-white transition-colors">badeprince89@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/2290169284952" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="bg-premium-black p-4 rounded-full border border-gray-800 group-hover:border-deep-violet transition-colors">
                  <Phone className="text-deep-violet" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">WhatsApp</h3>
                  <p className="text-neutral-gray group-hover:text-white transition-colors">+229 01 69 28 49 52</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input 
                type="text" 
                placeholder="Votre Nom" 
                required 
                className="w-full p-4 bg-premium-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-deep-violet focus:outline-none transition-shadow"
              />
              <input 
                type="email" 
                placeholder="Votre Email" 
                required 
                className="w-full p-4 bg-premium-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-deep-violet focus:outline-none transition-shadow"
              />
              <textarea 
                placeholder="Votre Message" 
                rows={5} 
                required 
                className="w-full p-4 bg-premium-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-deep-violet focus:outline-none transition-shadow"
              ></textarea>
              <button type="submit" className="w-full bg-deep-violet text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-violet-700 transition-all duration-300 shadow-lg">
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
