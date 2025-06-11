import React from 'react'
import { motion } from 'framer-motion'

const weekendIdeas = [
  {
    title: "Relaxed Jeans & Tees",
    desc: "Effortless and always in style for a laid-back weekend.",
    emoji: "👖",
    color: "from-green-400 to-teal-400"
  },
  {
    title: "Athleisure",
    desc: "Joggers, hoodies, and sneakers for a sporty, comfy look.",
    emoji: "🧢",
    color: "from-teal-400 to-blue-300"
  },
  {
    title: "Flowy Dresses",
    desc: "Perfect for brunch or a stroll in the park.",
    emoji: "👗",
    color: "from-yellow-300 to-pink-200"
  },
  {
    title: "Layered Accessories",
    desc: "Add hats, sunglasses, and light scarves for a fun touch.",
    emoji: "🕶️",
    color: "from-pink-300 to-yellow-200"
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

const WeekendVibes = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-teal-50 to-yellow-50 min-h-[80vh]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent drop-shadow"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Weekend Vibes
        </motion.h2>
        <motion.p
          className="mb-12 text-lg text-gray-700 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Relax and enjoy your weekend with these casual and comfortable outfit ideas:
        </motion.p>
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {weekendIdeas.map((idea, idx) => (
            <motion.div
              key={idea.title}
              variants={cardVariants}
              className={`rounded-2xl shadow-xl p-7 bg-gradient-to-br ${idea.color} relative overflow-hidden group`}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(16,185,129,0.15)" }}
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

export default WeekendVibes