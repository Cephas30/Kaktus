import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import hero image (you can replace later)
import it from "../assets/images/it.jpg";

const IctInfrastructure = () => {
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

    // Sub-services with detailed descriptions
    const subServices = [
        {
            title: "ICT Center Development and Installations",
            description: "We design and build modern ICT centers equipped with the latest technology, including structured cabling, network infrastructure, and security systems, ensuring reliable and scalable operations.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: "Server Construction",
            description: "We provide end-to-end server infrastructure solutions, including server room design, hardware procurement, installation, and configuration, tailored to meet your data processing and storage needs.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            )
        },
        {
            title: "Cloud Development",
            description: "We offer cloud computing solutions, including private, public, and hybrid cloud deployment, migration services, and ongoing management, enabling businesses to scale securely and cost-effectively.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            )
        }
    ];

    return (
        <div className="w-full overflow-hidden bg-white">
            {/* ================= HERO SECTION ================= */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${it})` }}
                >
                    <div className="absolute inset-0 bg-[#0A5F3C]/80" />
                </div>
                
                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">ICT Infrastructure</h1>
                    <p className="text-xl md:text-2xl max-w-3xl text-white/90">
                        Building the digital backbone for modern enterprises
                    </p>
                    <div className="w-24 h-1 bg-[#FFB347] mt-8 rounded-full" />
                </div>
            </div>

            {/* ================= OVERVIEW SECTION ================= */}
            <div data-section="overview" className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className={`max-w-4xl mx-auto text-center transition-all duration-1000
                          ${inView.overview ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-6 relative inline-block
                            after:content-[''] after:absolute after:-bottom-3 after:left-1/2 
                            after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#FFB347] 
                            after:rounded-full">
                            Digital Infrastructure Experts
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Kaktus Resources delivers robust ICT infrastructure solutions that empower businesses and institutions. 
                            From physical data centers to cloud platforms, we combine engineering precision with the latest technologies 
                            to create reliable, secure, and scalable digital environments. Our team ensures seamless integration and 
                            long-term support, so you can focus on your core mission.
                        </p>
                    </div>
                </div>
            </div>

            {/* ================= DETAILED SUB-SERVICE LIST ================= */}
            <div data-section="services" className="py-16 md:py-20 bg-[#F5F5DC]">
                <div className="container mx-auto px-6">
                    <div className={`max-w-7xl mx-auto transition-all duration-1000
                          ${inView.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-4 inline-block relative
                                after:content-[''] after:absolute after:-bottom-3 after:left-1/2 
                                after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#FFB347] 
                                after:rounded-full">
                                    ICT Services
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Comprehensive technology solutions for your infrastructure needs
                            </p>
                        </div>

                        {/* Sub-service grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {subServices.map((service, index) => (
                                <div
                                    key={index}
                                    className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                                              transition-all duration-500 hover:-translate-y-1
                                              border border-[#0A5F3C]/10 hover:border-[#FFB347]
                                              flex flex-col sm:flex-row gap-4 items-start
                                              ${inView.services ? 'animate-fade-in-up' : 'opacity-0'}`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0A5F3C]/10 to-[#FFB347]/10 
                                                      flex items-center justify-center text-[#FFB347]
                                                      group-hover:scale-110 transition-transform duration-500">
                                            {service.icon("w-7 h-7")}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-[#0A5F3C] mb-2 group-hover:text-[#FFB347] 
                                                       transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
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
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">15+</div>
                            <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">ICT Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">5+</div>
                            <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">Data Centers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">8+</div>
                            <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">100%</div>
                            <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">Uptime Guarantee</div>
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
                            Ready to Modernize Your ICT Infrastructure?
                        </h2>
                        
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                            Partner with us to build reliable, secure, and scalable technology systems for your organization.
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
                                View Related Projects
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

export default IctInfrastructure;