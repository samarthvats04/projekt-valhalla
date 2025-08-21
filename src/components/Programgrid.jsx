import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Programgrid = ({ onProgramSelect }) => {
  // Program data
  const programs = [
    {
      id: 'ragnarok',
      title: 'Ragnarok',
      description: 'The ultimate strength program',
      image: '/path/to/ragnarok-runes.jpg', // Replace with your first image path
      color: 'bg-black'
    },
    {
      id: 'valhalla',
      title: 'Valhalla',
      description: 'Elite conditioning protocol',
      image: '/path/to/valhalla-runes.jpg', // Replace with your second image path
      color: 'bg-black'
    },
    {
      id: 'asgard',
      title: 'Asgard',
      description: 'Divine muscle building',
      image: '/path/to/asgard-runes.jpg', // Replace with your third image path
      color: 'bg-black'
    }
  ];

  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const titleVariants = {
    initial: { y: 0, opacity: 0 },
    hover: { 
      y: 10, 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0 },
    hover: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "backOut" }
    }
  };

  const handleProgramClick = (programId) => {
    if (onProgramSelect) {
      onProgramSelect(programId);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
          Choose Your Path
        </h1>
        <p className="text-xl text-gray-400 text-center mb-16">
          Select a program to begin your transformation
        </p>
        
        <div className="flex justify-center gap-30 max-w-6xl mx-auto">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              className="relative group cursor-pointer"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
            >
              {/* Card */}
              <div className={`relative w-80 h-80 mx-auto border-4 border-white ${program.color} p-8 flex flex-col items-center justify-center overflow-hidden`}>
                {/* Logo/Image */}
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-contain filter drop-shadow-lg"
                  />
                </div>
                
                {/* Description */}
                <p className="text-lg text-center text-white/80 mb-6">
                  {program.description}
                </p>
                
                {/* Button - appears on hover */}
                <motion.button
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  onClick={() => handleProgramClick(program.id)}
                  className="absolute bottom-8 bg-white text-black px-6 py-3 font-bold hover:bg-gray-200 transition-colors shadow-lg"
                >
                  Enter Program
                </motion.button>
              </div>
              
              {/* Title - slides out on hover */}
              <motion.div
                variants={titleVariants}
                initial="initial"
                whileHover="hover"
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 font-bold text-xl shadow-lg"
              >
                {program.title}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programgrid;