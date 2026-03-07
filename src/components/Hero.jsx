import React from 'react';
import heroImage from '../assets/images/hero1.jpg';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={heroImage}
                    alt="Kaktus Resources Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <div className="mb-6">
                    <span className="text-sm font-semibold text-[#FFB347] tracking-[0.2em] uppercase">
                        KAKTUS RESOURCES
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                    Growing Ideas,
                    <span className="block text-[#FFB347] mt-2">Building Futures</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-6">
                    Nurturing Innovation in Ghana's Next Generation
                </p>

                <p className="text-gray-300 max-w-2xl mb-10 text-lg mx-auto">
                    We provide sustainable educational resources, tech training, and innovative
                    solutions that empower communities and foster growth across Ghana.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#"
                        className="px-8 py-4 bg-[#FFB347] text-[#0A5F3C] font-semibold rounded-lg 
                     hover:bg-[#e69e3d] transition-colors duration-300 
                     shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                     border-2 border-[#FFB347]"
                    >
                        Our Services
                    </a>
                    <a
                        href="#"
                        className="px-8 py-4 border-2 border-white text-white 
                     font-semibold rounded-lg hover:bg-white 
                     hover:text-[#0A5F3C] transition-all duration-300
                     shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Explore Projects
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-[#FFB347] rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;