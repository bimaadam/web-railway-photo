// Hero.tsx
import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('bg-kereta.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container relative z-10 mx-auto px-4 py-52 text-center text-white sm:px-6 md:px-8">
                <h1 className="mb-4 text-5xl font-extrabold">Welcome to Railway Photography</h1>
                <p className="mb-6 text-lg">Capturing the beauty of trains and landscapes</p>
                <a
                    href="#explore"
                    className="inline-block rounded-lg bg-gradient-to-r from-[#000dbe] to-[#FF6F00] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110"
                >
                    Explore Now
                </a>
            </div>
        </section>
    );
};

export default Hero;
