import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Flag } from 'lucide-react';
import { languages } from '../data/portfolioData';

const Languages: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const getLanguageColor = (proficiency: number) => {
    if (proficiency >= 95) return 'from-green-600 to-green-400';
    if (proficiency >= 80) return 'from-blue-600 to-blue-400';
    if (proficiency >= 60) return 'from-yellow-600 to-yellow-400';
    return 'from-orange-600 to-orange-400';
  };

  return (
    <section id="languages" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Languages
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Multilingual professional with native and advanced proficiency 
              in multiple European languages, enabling effective global collaboration.
            </p>
          </motion.div>

          <div className="space-y-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                      <Flag size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{language.name}</h3>
                      <p className="text-purple-400 text-sm">{language.level}</p>
                    </div>
                  </div>
                  <span className="text-white font-bold text-lg">{language.proficiency}%</span>
                </div>

                <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getLanguageColor(language.proficiency)} rounded-full`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${language.proficiency}%` } : { width: 0 }}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.2,
                      ease: "easeOut" 
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 grid md:grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-r from-purple-600/10 to-purple-400/10 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center">
                <Globe className="mr-2" size={20} />
                Native Multilingual
              </h3>
              <p className="text-gray-300 text-sm">
                Native German speaker with full professional proficiency in English and Spanish, 
                enabling seamless communication in international business environments.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600/10 to-purple-400/10 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center">
                <Flag className="mr-2" size={20} />
                Regional Expertise
              </h3>
              <p className="text-gray-300 text-sm">
                Additional competency in Valencian and French, demonstrating cultural 
                adaptability and commitment to local integration in the Valencia region.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Languages; 