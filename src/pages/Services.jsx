import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import hero image (you can replace later)
import hero1 from "../assets/images/hero1.jpg";

const Services = () => {
    const [inView, setInView] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(prev => ({ ...prev, [entry.target.dataset.section]: true }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('[data-section]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const serviceCategories = [
        {
            title: "Civil Engineering",
            description: "Building construction, industrial engineering, schools, housing, hospitals, airport infrastructure, stadiums, office spaces, waterproofing, and insulation solutions.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            path: "/services/civil-engineering"
        },
        {
            title: "Sustainable Energy",
            description: "Solar power, hydro power, wind power, thermal power plants, electrification and energy development.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            path: "/services/sustainable-energy"
        },
        {
            title: "Waste Management & Recycling",
            description: "Solid waste management, damp site development and management, sewage development and maintenance, waste recycling.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            ),
            path: "/services/waste-management"
        },
        {
            title: "ICT Infrastructure",
            description: "ICT center development and installations, server construction, cloud development.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
            path: "/services/ict-infrastructure"
        },
        {
            title: "Agriculture Estates",
            description: "Irrigation development, dam construction, water channels development, warehouse development, processing plant development.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            path: "/services/agriculture-estate"
        }
    ];

    return (
        <div className="w-full overflow-hidden bg-white">
            {/* ================= HERO SECTION ================= */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${hero1})` }}
                >
                    <div className="absolute inset-0 bg-[#0A5F3C]/80" />
                </div>
                
                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl md:text-2xl max-w-3xl text-white/90">
                        Comprehensive engineering and infrastructure solutions across multiple sectors
                    </p>
                    <div className="w-24 h-1 bg-[#FFB347] mt-8 rounded-full" />
                </div>
            </div>

            {/* ================= INTRODUCTION ================= */}
            <div data-section="intro" className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className={`max-w-4xl mx-auto text-center transition-all duration-1000
                          ${inView.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-6 relative inline-block
                            after:content-[''] after:absolute after:-bottom-3 after:left-1/2 
                            after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#FFB347] 
                            after:rounded-full">
                            What We Do
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Kaktus Resources offers a diverse portfolio of services spanning civil engineering, sustainable energy, 
                            waste management, ICT infrastructure, and agriculture estate development. With over a decade of experience, 
                            we deliver integrated solutions that meet the highest standards of quality, safety, and sustainability.
                        </p>
                    </div>
                </div>
            </div>

            {/* ================= SERVICE CATEGORIES GRID ================= */}
            <div data-section="categories" className="py-16 md:py-20 bg-[#F5F5DC]">
                <div className="container mx-auto px-6">
                    <div className={`max-w-7xl mx-auto transition-all duration-1000
                          ${inView.categories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-4 inline-block relative
                                after:content-[''] after:absolute after:-bottom-3 after:left-1/2 
                                after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#FFB347] 
                                after:rounded-full">
                                    Our Expertise
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Explore our core service areas
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {serviceCategories.map((service, index) => (
                                <Link
                                    key={index}
                                    to={service.path}
                                    className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                                              transition-all duration-500 hover:-translate-y-2
                                              border border-[#0A5F3C]/10 hover:border-[#FFB347]
                                              flex flex-col items-start
                                              ${inView.categories ? 'animate-fade-in-up' : 'opacity-0'}`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex-shrink-0 mb-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0A5F3C]/10 to-[#FFB347]/10 
                                                      flex items-center justify-center text-[#FFB347]
                                                      group-hover:scale-110 transition-transform duration-500">
                                            {service.icon("w-8 h-8")}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-[#0A5F3C] mb-2 group-hover:text-[#FFB347] 
                                                       transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {service.description}
                                        </p>
                                        <span className="inline-flex items-center text-[#FFB347] font-semibold group/link">
                                            Learn More
                                            <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" 
                                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= STATS SECTION ================= */}
            <div className="py-16 md:py-20 bg-gradient-to-br from-[#0A5F3C] to-[#0A5F3C]/90 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 10px 10px, #FFB347 2px, transparent 2px)`,
                        backgroundSize: '30px 30px'
                    }}
                />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">10+</div>
                            <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">100+</div>
                            <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">Projects Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">36+</div>
                            <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">Professionals</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">100%</div>
                            <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= CTA SECTION ================= */}
            <div className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-xl border border-[#FFB347]/20 
                                  max-w-4xl mx-auto relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFB347] to-[#0A5F3C]" />
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-4">
                            Need a Custom Solution?
                        </h2>
                        
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                            Contact our team to discuss your specific requirements and get a tailored proposal.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center bg-[#FFB347] text-[#0A5F3C] font-bold 
                                         px-8 py-4 rounded-lg hover:bg-[#e69e3d] transform hover:-translate-y-1 
                                         transition-all duration-300 shadow-lg hover:shadow-xl group"
                            >
                                Contact Us
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                            
                            <Link
                                to="/projects"
                                className="inline-flex items-center border-2 border-[#0A5F3C] text-[#0A5F3C] 
                                         font-bold px-8 py-4 rounded-lg hover:bg-[#0A5F3C] hover:text-white 
                                         transform hover:-translate-y-1 transition-all duration-300 
                                         shadow-lg hover:shadow-xl group"
                            >
                                View Our Projects
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default Services;