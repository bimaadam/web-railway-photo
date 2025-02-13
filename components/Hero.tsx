'use client'
import { motion } from 'framer-motion';
import React from 'react';

const Hero = () => {
    return (
        <motion.section
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('bg-kereta.jpg')" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div className="absolute inset-0 opacity-50 dark:bg-black"></div>
            <div className="container relative z-10 mx-auto px-4 py-52 text-center text-white sm:px-6 md:px-8">
                <motion.h1
                    className="mb-4 text-5xl font-extrabold"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Welcome to Railway Photography
                </motion.h1>
                <motion.p
                    className="mb-6 text-lg"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    Capturing the beauty of trains and landscapes
                </motion.p>
                <motion.a
                    href="#explore"
                    className="inline-block rounded-lg bg-gradient-to-r from-[#000dbe] to-[#FF6F00] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-110 hover:brightness-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                >
                    Explore Now
                </motion.a>
            </div>
        </motion.section>
    );
};

export default Hero;
