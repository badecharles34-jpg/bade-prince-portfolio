
'use client';

import { Youtube, Clapperboard, Megaphone, Paintbrush } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: <Youtube size={40} className="text-deep-violet" />,
    title: 'Miniatures YouTube professionnelles',
    description: 'Visuels modernes, dynamiques et optimisés pour augmenter votre taux de clics.',
  },
  {
    icon: <Megaphone size={40} className="text-deep-violet" />,
    title: 'Visuels publicitaires',
    description: 'Création d’images puissantes pour Facebook Ads, Instagram Ads et TikTok Ads.',
  },
  {
    icon: <Clapperboard size={40} className="text-deep-violet" />,
    title: 'Flyers & affiches',
    description: 'Conception propre, moderne et adaptée à vos événements et formations.',
  },
  {
    icon: <Paintbrush size={40} className="text-deep-violet" />,
    title: 'Social Media Design',
    description: 'Création de visuels cohérents pour vos réseaux sociaux.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#121212]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Mes Services</h2>
          <div className="w-20 h-1 bg-deep-violet mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-premium-black p-8 rounded-lg shadow-lg border border-gray-800 hover:border-deep-violet hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-neutral-gray">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
