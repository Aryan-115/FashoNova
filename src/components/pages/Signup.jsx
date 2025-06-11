import React, { useState } from 'react';
import { motion } from 'framer-motion';

const formVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
};

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
      <motion.form
        className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md"
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-2 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md transition"
          type="submit"
        >
          Sign Up
        </motion.button>
        <div className="text-center mt-4 text-sm">
          Already have an account? <a href="/login" className="text-purple-600 hover:underline">Login</a>
        </div>
      </motion.form>
    </div>
  );
};

export default Signup;