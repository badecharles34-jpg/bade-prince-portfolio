
'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-premium-black">
      <div className="container mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          <span className="text-deep-violet">Bade Prince</span> – Graphiste Miniamaker
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-neutral-gray mb-8"
        >
          4 ans d’expérience en graphisme et 2 ans d’expertise en miniatures YouTube. Je crée des miniatures YouTube professionnelles, modernes et optimisées pour augmenter votre taux de clics.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="w-full sm:w-auto bg-bright-yellow text-premium-black font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg">
            Me contacter
          </a>
          <a href="#portfolio" className="w-full sm:w-auto bg-deep-violet text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-violet-700 transition-all duration-300 shadow-lg">
            Voir mon portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
