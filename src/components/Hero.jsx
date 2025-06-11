import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
};

const bgOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } }
};

// Add your background images here
const backgrounds = [
  "hero1.jpg",
  "category2.jpg",
  "hero2.jpg",
  "hero3.jpg"
];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bgIndex}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${backgrounds[bgIndex]}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          variants={bgOverlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        />
      </AnimatePresence>

      <motion.div
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
          variants={fadeUp}
        >
          <span className="inline-block animate-pulse">Discover Your</span>
          <span className="block bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
            Perfect Style
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow"
          variants={fadeUp}
        >
          Choose your style, find your fit, and shop with confidence.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={fadeUp}
        >
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(236,72,153,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transform transition-all duration-200 shadow-lg font-semibold text-lg"
            onClick={() => {
              const el = document.getElementById('choose');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-10 left-10 w-24 h-24 rounded-full bg-pink-400 opacity-30 blur-2xl z-0"
        animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-16 w-32 h-32 rounded-full bg-purple-500 opacity-20 blur-3xl z-0"
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Hero;