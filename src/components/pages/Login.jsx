import React, { useState } from 'react';
import { motion } from 'framer-motion';

const formVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100">
      <motion.form
        className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md"
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-2 rounded bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md transition"
          type="submit"
        >
          Login
        </motion.button>
        <div className="text-center mt-4 text-sm">
          Don't have an account? <a href="/signup" className="text-pink-600 hover:underline">Sign Up</a>
        </div>
      </motion.form>
    </div>
  );
};

export default Login;