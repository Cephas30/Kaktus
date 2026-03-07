import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import hero image (you can replace later)
import hero1 from "../assets/images/hero1.jpg";

const AgricultureEstate = () => {
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
            title: "Irrigation Development",
            description: "We design and implement efficient irrigation systems, including drip, sprinkler, and pivot irrigation, tailored to crop needs and local conditions, maximizing water efficiency and agricultural yield.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            )
        },
        {
            title: "Dam Construction",
            description: "We provide end-to-end dam construction services, from site selection and design to earthworks and concrete structures, ensuring water storage for irrigation, livestock, and community use.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            )
        },
        {
            title: "Water Channels Development",
            description: "We construct and rehabilitate canals, lined and unlined channels, and drainage systems to convey water efficiently across agricultural lands, reducing losses and improving distribution.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Warehouse Development",
            description: "We design and build modern agricultural warehouses for storage of produce, equipment, and supplies, with options for climate control, pest management, and efficient logistics.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: "Processing Plant Development",
            description: "We develop processing facilities for agricultural products, including grain mills, fruit packing houses, and cassava processing plants, integrating machinery and quality control systems.",
            icon: (className) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
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
                    style={{ backgroundImage: `url(${hero1})` }}
                >
                    <div className="absolute inset-0 bg-[#0A5F3C]/80" />
                </div>
                
                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Agriculture Estates</h1>
                    <p className="text-xl md:text-2xl max-w-3xl text-white/90">
                        Integrated infrastructure for modern agriculture
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
                            Agricultural Infrastructure Solutions
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Kaktus Resources develops comprehensive agricultural estates that integrate water management, 
                            storage, and processing facilities. Our projects enhance productivity, sustainability, and 
                            value addition for farms and agribusinesses across Ghana. From irrigation to processing plants, 
                            we deliver turnkey solutions tailored to the needs of modern agriculture.
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
                                    Agriculture Estate Services
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Complete infrastructure for agricultural development
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
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">8+</div>
                            <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">Agriculture Estates</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">500+</div>
                            <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">Hectares Irrigated</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">10+</div>
                            <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">Years Experience</div>
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
                            Ready to Develop Your Agriculture Estate?
                        </h2>
                        
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                            Let's build the infrastructure you need to boost productivity and add value to your agricultural enterprise.
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

export default AgricultureEstate;