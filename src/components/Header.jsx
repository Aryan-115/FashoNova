import React, { useEffect, useState } from 'react'
import { FiMenu, FiSearch, FiUser } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
};

const mobileMenuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
    exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.15 } }
};

const profileMenuVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 180 } },
    exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.15 } }
};

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const handleClick = (e) => {
            if (!e.target.closest('.profile-menu') && !e.target.closest('.profile-btn')) {
                setShowProfileMenu(false);
            }
        };
        if (showProfileMenu) document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [showProfileMenu]);

    const navItems = [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'About', href: '/footer' },
        { id: 3, name: 'Choose Your Style', href: '#choose' },
        { id: 4, name: 'Contact', href: '/contact' },
    ]
    return (
        <header className={`sticky top-0 z-50 transition duration-300`}>
            <div className={`w-full ${isScrolled ? 'bg-gray-100/95 backdrop-blue shadow-md py-2' : 'bg-gray-100 py-4'}`}>
                <div className='max-x-7xl mx-auto  px-4 sm:px-6 lg:px-8'>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6'>
                        <motion.div
                            className="flex justify-between items-center w-full md:w-auto"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.a
                                href="/"
                                className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent tracking-wide drop-shadow hover:scale-105 transition-transform duration-300"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                FashoNova
                            </motion.a>

                            <button
                                className="md:hidden text-gray-800 focus:outline-none"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle mobile menu"
                            >
                                <FiMenu size={24} />
                            </button>
                        </motion.div>
                        <motion.div
                            className='w-full md:flex-l max-w-sm'
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className='relative w-full'>
                                <input type="text" placeholder='Search.....' className='w-full px-3 py-2 text-xs border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500' />
                                <button className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-inidgo-600' aria-label='Search button'>
                                    <FiSearch size={16} />
                                </button>
                            </div>
                        </motion.div>
                        <div className="relative">
                            <motion.button
                                className='profile-btn p-2 text-gray-700 hover:text-pink-600 focus:outline-none'
                                aria-label='User'
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                onClick={() => setShowProfileMenu((v) => !v)}
                            >
                                <FiUser size={20} />
                            </motion.button>
                            <AnimatePresence>
                                {showProfileMenu && (
                                    <motion.div
                                        className="profile-menu absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50"
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={profileMenuVariants}
                                    >
                                        <a href="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Login</a>
                                        <a href="/signup" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Sign Up</a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r from-pink-500 to-purple-600'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <motion.nav
                        className='hidden md:flex justify-center py-3'
                        variants={navVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <ul className='flex flex-wrap gap-x-6 text-sm font-meduim text-white '>
                            {navItems.map(item => (
                                <motion.li key={item.id} variants={navItemVariants}>
                                    <a href={item.href} className='hover:text-pink-300 transition-colors'>
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.nav
                                className='md:hidden mt-2 bg-white rounded-lg shadow-md p-4 space-y-3 text-amber-950 text-center'
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={mobileMenuVariants}
                            >
                                {navItems.map(item => (
                                    <a key={item.id} href={item.href} className='block text-sm font-medium hover:text-amber-600 transition-colors'>
                                        {item.name}
                                    </a>
                                ))}
                            </motion.nav>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    )
}

export default Header