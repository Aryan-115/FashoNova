import React from 'react'
import { motion } from 'framer-motion'

const specialIdeas = [
  {
    title: "Statement Dresses & Suits",
    desc: "Go bold with unique cuts and luxe fabrics for a show-stopping look.",
    emoji: "👗",
    color: "from-purple-400 to-pink-400"
  },
  {
    title: "Shimmer & Shine",
    desc: "Sequins, metallics, and satin are in for every celebration.",
    emoji: "✨",
    color: "from-pink-300 to-yellow-200"
  },
  {
    title: "Elegant Accessories",
    desc: "Clutches, jewelry, and heels to complete your special look.",
    emoji: "👠",
    color: "from-violet-400 to-pink-300"
  },
  {
    title: "Classic Black",
    desc: "You can never go wrong with a little black dress or suit.",
    emoji: "🖤",
    color: "from-gray-700 to-gray-400"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120 } }
};

const SpecialOccasions = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-violet-50 to-pink-50 min-h-[80vh]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Special Occasions
        </motion.h2>
        <motion.p
          className="mb-12 text-lg text-gray-700 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Make every moment memorable with these elegant outfit ideas for special events:
        </motion.p>
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {specialIdeas.map((idea, idx) => (
            <motion.div
              key={idea.title}
              variants={cardVariants}
              className={`rounded-2xl shadow-xl p-7 bg-gradient-to-br ${idea.color} relative overflow-hidden group`}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(168,85,247,0.15)" }}
            >
              <div className="absolute top-4 right-4 text-4xl opacity-30 group-hover:opacity-60 transition">{idea.emoji}</div>
              <h3 className="text-2xl font-bold mb-2 text-white drop-shadow">{idea.title}</h3>
              <p className="text-white/90">{idea.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SpecialOccasions