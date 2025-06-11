import React from 'react'
import { motion } from 'framer-motion'

const workEssentials = [
  {
    title: "Tailored Blazer",
    desc: "A versatile piece that elevates any outfit, perfect for meetings or presentations.",
    emoji: "🧥",
    color: "from-gray-700 to-gray-900"
  },
  {
    title: "Classic Button-Down Shirt",
    desc: "A timeless staple that can be dressed up or down, offering a polished look.",
    emoji: "👔",
    color: "from-blue-200 to-blue-400"
  },
  {
    title: "Comfortable Knit Sweater",
    desc: "Stay cozy and stylish with a soft knit sweater, ideal for casual workdays.",
    emoji: "🧶",
    color: "from-stone-300 to-stone-500"
  },
  {
    title: "Well-Fitted Trousers",
    desc: "Opt for tailored trousers in neutral colors for a professional and comfortable fit.",
    emoji: "👖",
    color: "from-gray-500 to-gray-700"
  },
  {
    title: "Versatile Midi Skirt",
    desc: "A midi skirt offers a chic and feminine touch, suitable for various office settings.",
    emoji: "👗",
    color: "from-rose-200 to-rose-400"
  },
  {
    title: "Elegant Blouse",
    desc: "Choose a sophisticated blouse with subtle details for a refined and stylish appearance.",
    emoji: "👚",
    color: "from-purple-200 to-purple-400"
  },
  {
    title: "Comfortable Loafers or Flats",
    desc: "Prioritize comfort without sacrificing style with classic loafers or flats.",
    emoji: "👞",
    color: "from-amber-200 to-amber-400"
  },
  {
    title: "Stylish Ankle Boots",
    desc: "Add a touch of sophistication with ankle boots, perfect for cooler days.",
    emoji: "🥾",
    color: "from-brown-400 to-brown-600"
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

const WorkEssentials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-zinc-50 to-stone-50 min-h-[80vh]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work Wardrobe Essentials
        </motion.h2>
        <motion.p
          className="mb-12 text-lg text-gray-700 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Build a professional and stylish work wardrobe with these essential pieces. Mix and match for endless outfit possibilities.
        </motion.p>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {workEssentials.map((essential, idx) => (
            <motion.div
              key={essential.title}
              variants={cardVariants}
              className={`rounded-2xl shadow-xl p-7 bg-gradient-to-br ${essential.color} relative overflow-hidden group`}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(147, 197, 253, 0.25)" }}
            >
              <div className="absolute top-4 right-4 text-4xl opacity-30 group-hover:opacity-60 transition">{essential.emoji}</div>
              <h3 className="text-xl font-bold mb-2 text-white drop-shadow">{essential.title}</h3>
              <p className="text-white/90">{essential.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WorkEssentials
