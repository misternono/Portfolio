import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import { events } from '../data/portfolioData';

const Events: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [showAll, setShowAll] = useState(false);
  const INITIAL_EVENTS_COUNT = 3;
  const displayedEvents = showAll ? events : events.slice(0, INITIAL_EVENTS_COUNT);
  const hasMoreEvents = events.length > INITIAL_EVENTS_COUNT;
  
  // Calculate unique topics count
  const uniqueTopics = new Set(events.flatMap(event => event.topics));
  const topicsCount = uniqueTopics.size;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const getEventTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'conference': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'workshop': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'webinar series': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="events" className="py-20">
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
              Events & Conferences
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Continuous learning through participation in industry conferences, workshops, 
              and technical events to stay current with the latest technologies and best practices.
            </p>
          </motion.div>

          <div className="space-y-8">
            {displayedEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-2xl font-bold text-white">{event.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm border ${getEventTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-4 text-gray-400">
                      <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {event.website && (
                    <a
                      href={event.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors mt-4 lg:mt-0"
                    >
                      <ExternalLink size={16} />
                      <span>Event Website</span>
                    </a>
                  )}
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">{event.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-purple-400">
                    <Tag size={16} />
                    <span className="font-medium">Topics Covered:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {event.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {hasMoreEvents && (
            <motion.div
              variants={itemVariants}
              className="flex justify-center mt-8"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-lg hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300"
              >
                <span>{showAll ? 'Show Less' : `Show ${events.length - INITIAL_EVENTS_COUNT} More`}</span>
                {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </motion.div>
          )}

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center p-8 bg-gradient-to-r from-purple-600/10 to-purple-400/10 rounded-xl border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Commitment to Continuous Learning</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Regular participation in industry events helps me stay updated with the latest technologies, 
              network with fellow developers, and bring fresh insights to my work. I believe continuous 
              learning is essential in the rapidly evolving tech landscape.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">{events.length}+</div>
                <div className="text-gray-400 text-sm">Events Attended</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">{topicsCount}+</div>
                <div className="text-gray-400 text-sm">Topics Explored</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">Ongoing</div>
                <div className="text-gray-400 text-sm">Active Period</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events; 