import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Shield, Globe } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (name: string) => {
    if (name.includes('Elastic')) return Shield;
    if (name.includes('VUE')) return Globe;
    if (name.includes('Cambridge')) return Award;
    if (name.includes('INCIBE')) return Trophy;
    return Award;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Certifications & Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional certifications and competitive achievements that demonstrate 
              commitment to continuous learning and technical excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = getIcon(cert.name);
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={28} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                          {cert.name}
                        </h3>
                        <span className="text-purple-400 font-semibold mt-1 sm:mt-0">
                          {cert.year}
                        </span>
                      </div>
                      
                      <p className="text-purple-400 font-medium mb-3">{cert.issuer}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 grid md:grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-r from-purple-600/10 to-purple-400/10 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center">
                <Trophy className="mr-2" size={20} />
                Competitive Excellence
              </h3>
              <p className="text-gray-300 text-sm">
                Achieved 13th place nationally in INCIBE cybersecurity competitions (2015, 2017), 
                demonstrating strong problem-solving skills and security expertise.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600/10 to-purple-400/10 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center">
                <Award className="mr-2" size={20} />
                Academic Recognition
              </h3>
              <p className="text-gray-300 text-sm">
                Received honorary diploma for exceptional involvement in extracurricular projects 
                during first year of secondary education.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 