'use client';

import { motion } from 'framer-motion';
import { Card } from "flowbite-react";

const testimonials = [
    {
        name: "Rizky Saputra",
        text: "Tempat yang keren buat berbagi pengalaman fotografi kereta api! Banyak ilmu baru yang bisa didapat.",
        image: "https://via.placeholder.com/100",
    },
    {
        name: "Dewi Ananda",
        text: "Komunitas yang solid! Saya jadi lebih paham teknik fotografi kereta dan dapat teman baru.",
        image: "https://via.placeholder.com/100",
    },
    {
        name: "Bagas Pratama",
        text: "Sangat membantu buat pemula seperti saya. Semua ramah dan mau berbagi ilmu. Sukses selalu",
        image: "https://via.placeholder.com/100",
    },
];

export default function Testimoni() {
    return (
        <section id="testimonials" className="bg-gray-100 py-16 dark:bg-gray-900">
            <div className="mx-auto max-w-5xl text-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Apa Kata Mereka?</h2>
                <p className="mt-2 text-gray-600 dark:text-white">Pendapat para fotografer tentang komunitas ini.</p>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Card className="rounded-lg bg-white p-6 shadow-md">
                                <p className="italic text-orange-900 dark:text-white">{testimonial.text}</p>
                                <h3 className="mt-4 font-semibold text-purple-950 dark:text-white">{testimonial.name}</h3>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
