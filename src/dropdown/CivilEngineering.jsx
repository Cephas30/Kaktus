import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import hero image (you can replace later)
import upgrade from "../assets/images/upgrade.jpg";

const CivilEngineering = () => {
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
            title: "Building Construction",
            description: "We deliver residential and commercial buildings with a focus on quality, durability, and modern design. From concept to completion, our team ensures every detail meets the highest standards.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: "Industrial Engineering",
            description: "We design and construct factories, warehouses, and industrial complexes that optimize workflow, safety, and efficiency. Our solutions are tailored to your specific industrial needs.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: "Schools",
            description: "From primary schools to university campuses, we create inspiring and functional educational spaces that foster learning and community engagement.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
            )
        },
        {
            title: "Housing",
            description: "We develop housing solutions ranging from affordable units to luxury estates, ensuring comfort, sustainability, and community integration.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            title: "Hospitals",
            description: "We build state-of-the-art medical facilities, including hospitals, clinics, and specialized centers, designed for patient care and operational efficiency.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            title: "Airport & Aviation Infrastructure",
            description: "We provide comprehensive infrastructure for airports, including runways, terminals, hangars, and support facilities, meeting international standards.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            )
        },
        {
            title: "Indoor Stadiums",
            description: "We construct multi-purpose indoor arenas for sports, entertainment, and events, with flexible designs to accommodate diverse activities.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Office Space",
            description: "We create modern, efficient office environments that enhance productivity and reflect corporate identity, from small offices to large headquarters.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: "Waterproofing",
            description: "We offer advanced waterproofing solutions for basements, roofs, and structures, protecting your investment from water damage and ensuring longevity.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            )
        },
        {
            title: "Insulations - Thermal (Fire) and Sound",
            description: "We provide comprehensive insulation solutions for thermal efficiency, fire safety, and acoustic comfort, enhancing building performance and occupant well-being.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
                    style={{ backgroundImage: `url(${upgrade})` }}
                >
                    <div className="absolute inset-0 bg-[#0A5F3C]/80" />
                </div>
                
                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Civil Engineering</h1>
                    <p className="text-xl md:text-2xl max-w-3xl text-white/90">
                        Building the foundation for communities and industries
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
                            Comprehensive Civil Engineering Services
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Kaktus Resources brings over a decade of experience in civil engineering across Ghana. 
                            We deliver robust infrastructure and buildings that stand the test of time, 
                            from residential housing to industrial complexes, educational institutions to healthcare facilities. 
                            Our approach integrates innovation, sustainability, and strict quality control to exceed client expectations.
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
                                What We Offer
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Explore our full range of civil engineering capabilities
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

            {/* ================= STATS SECTION (optional, but keeps consistency) ================= */}
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
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">50+</div>
                            <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">Projects Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">10+</div>
                            <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">20+</div>
                            <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">Expert Engineers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">100%</div>
                            <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= SUBTLE CTA ================= */}
            <div className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-xl border border-[#FFB347]/20 
                                  max-w-4xl mx-auto relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFB347] to-[#0A5F3C]" />
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-4">
                            Ready to Discuss Your Civil Engineering Project?
                        </h2>
                        
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                            Our team is ready to provide expert guidance and tailor solutions to your specific needs.
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
            <style>{`
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

export default CivilEngineering;