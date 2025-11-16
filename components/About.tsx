
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-premium-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">À propos de moi</h2>
          <div className="w-20 h-1 bg-deep-violet mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/3 flex justify-center"
          >
            <Image
              src="https://picsum.photos/400"
              alt="Bade Prince, Graphiste"
              width={300}
              height={300}
              className="rounded-full object-cover border-4 border-deep-violet shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-2/3"
          >
            <p className="text-lg text-neutral-gray leading-relaxed">
              « Je suis Bade Prince, graphiste passionné avec 4 ans d’expérience dans le design visuel et 2 ans d’expertise spécialisée dans la création de miniatures YouTube.
              <br/><br/>
              Mon objectif est simple : transformer vos vidéos en aimants à clics grâce à des visuels puissants, clairs et irrésistibles.
              Je combine créativité, stratégie visuelle et compréhension de l’algorithme YouTube pour produire des miniatures qui génèrent de vrais résultats. »
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
