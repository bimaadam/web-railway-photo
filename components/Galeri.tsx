/* eslint-disable tailwindcss/migration-from-tailwind-2 */
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';

const galleryImages = [
    "/bg-kereta.jpg",
    "/1.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);


    return (
        <section id='galeri' className="bg-gray-100 py-12 dark:bg-gray-900">
            <div className="container mx-auto text-center">
                <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
                    Pemenang Minggu Ini & Sebelumnya
                </h2>
                <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                    {galleryImages.map((src, index) => (
                        <motion.div
                            key={index}
                            className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedImage(src)}
                        >
                            <Image
                                src={src}
                                alt={`Pemenang ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Preview */}
            <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
                <Dialog.Panel className="relative max-w-3xl rounded-lg bg-white p-4 shadow-lg">
                    <button className="absolute right-2 top-2 text-gray-600 hover:text-gray-900" onClick={() => setSelectedImage(null)}>
                        ✕
                    </button>
                    {selectedImage && (
                        <Image
                            src={selectedImage}
                            alt="Preview Image"
                            width={800}
                            height={600}
                            className="rounded-lg"
                        />
                    )}
                </Dialog.Panel>
            </Dialog>
        </section >
    );
}