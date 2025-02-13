'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCameraRetro, FaUsers, FaTrain } from 'react-icons/fa';

export default function About() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="about"
            className="bg-gray-100 py-16 transition-colors duration-300 dark:bg-gray-900"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
                {/* Gambar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src="/bg-kereta.jpg"
                            alt="Fotografi Kereta Api"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>

                    <div className="absolute -left-5 -top-5 rounded-lg bg-gradient-to-r from-blue-950 to-orange-800  px-4 py-2 text-sm text-white shadow-md">
                        🚆 Railway Photography
                    </div>
                </motion.div>

                {/* Teks */}
                <div id='about'>
                    <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
                        Tentang Kami
                    </h2>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="leading-relaxed text-gray-600 dark:text-gray-300"
                    >
                        Kami adalah komunitas bagi para pecinta <strong>fotografi kereta api</strong>.
                        Di sini, kamu bisa <strong>nongkrong, belajar, dan berbagi</strong> pengalaman serta ilmu seputar fotografi perkeretaapian.
                    </motion.p>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-2 font-semibold text-gray-600 dark:text-gray-400"
                    >
                        📌 <strong>Catatan:</strong> Selain foto yang berhubungan dengan kereta api, harap <strong>tidak</strong> mengunggahnya di sini.
                        Terima kasih atas pengertiannya! 😊
                    </motion.p>

                    {/* Icon Features */}
                    <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                        {/* Animasi dari kiri */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center"
                        >
                            <FaCameraRetro className="mb-2 text-3xl text-teal-600 dark:text-teal-400" />
                            <p className="font-semibold text-gray-700 dark:text-gray-300">Belajar Fotografi</p>
                        </motion.div>

                        {/* Animasi dari bawah */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <FaTrain className="mb-2 text-3xl text-teal-600 dark:text-teal-400" />
                            <p className="font-semibold text-gray-700 dark:text-gray-300">Cinta Kereta Api</p>
                        </motion.div>

                        {/* Animasi dari kanan */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="flex flex-col items-center"
                        >
                            <FaUsers className="mb-2 text-3xl text-teal-600 dark:text-teal-400" />
                            <p className="font-semibold text-gray-700 dark:text-gray-300">Komunitas Solid</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
