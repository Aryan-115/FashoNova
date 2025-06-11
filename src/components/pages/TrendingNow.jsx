import React from 'react'
import { motion } from 'framer-motion'

const trends = [
  {
    title: "Oversized Blazers",
    desc: "Pair with crop tops and wide-leg pants for a chic look.",
    emoji: "🧥",
    color: "from-pink-400 to-rose-400"
  },
  {
    title: "Bold Prints",
    desc: "Animal prints, florals, and geometric patterns are everywhere.",
    emoji: "🌸",
    color: "from-yellow-400 to-pink-300"
  },
  {
    title: "Chunky Sneakers",
    desc: "Comfort meets style—perfect for streetwear vibes.",
    emoji: "👟",
    color: "from-purple-400 to-indigo-400"
  },
  {
    title: "Pastel Colors",
    desc: "Soft hues are trending for both men and women.",
    emoji: "🎨",
    color: "from-blue-300 to-pink-200"
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

const TrendingNow = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-rose-50 to-yellow-50 min-h-[80vh]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent drop-shadow"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trending Now
        </motion.h2>
        <motion.p
          className="mb-12 text-lg text-gray-700 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Stay ahead with the latest fashion trends and seasonal must-haves. Here’s what’s hot right now:
        </motion.p>
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {trends.map((trend, idx) => (
            <motion.div
              key={trend.title}
              variants={cardVariants}
              className={`rounded-2xl shadow-xl p-7 bg-gradient-to-br ${trend.color} relative overflow-hidden group`}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(236,72,153,0.15)" }}
            >
              <div className="absolute top-4 right-4 text-4xl opacity-30 group-hover:opacity-60 transition">{trend.emoji}</div>
              <h3 className="text-2xl font-bold mb-2 text-white drop-shadow">{trend.title}</h3>
              <p className="text-white/90">{trend.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrendingNow