import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { data } from 'react-router-dom';

const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
};

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        const url = "https://script.google.com/macros/s/AKfycbwSbhfvbkvkHIHix1H-NqcR--Vc-6QuUuY72_eK4pI_rl1b-TazuulirlpGMKpszIiyRA/exec";
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'},
                body:(`Name=${e.target.name.value}&Email=${e.target.email.value}&Message=${e.target.message.value}`)
        }).then(res=>res.text()).then(data => {
            alert(data)
        }).catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your message. Please try again later.');
        })
    };



    return (
        <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 min-h-[80vh]">
            <div className="max-w-xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Contact Us
                </motion.h2>
                <motion.p
                    className="mb-10 text-lg text-gray-700 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Have a question, suggestion, or just want to say hello? Fill out the form below and we'll get back to you!
                </motion.p>
                <motion.form
                    className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={formVariants}
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Message</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
                        />
                    </div>
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-2 rounded bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md transition"
                    >
                        Send Message
                    </motion.button>
                    {submitted && (
                        <motion.div
                            className="text-center text-green-600 font-semibold mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            Thank you! Your message has been sent.
                        </motion.div>
                    )}
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;