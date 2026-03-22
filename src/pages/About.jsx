// pages/About.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import images (using hero images as placeholders)
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";

const About = () => {
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

    // Board Members Data (expertise removed)
    const boardMembers = [
        { 
            name: "Prof. David Abdulai", 
            title: "Chairman",
            initial: "D"
        },
        { 
            name: "Dr. Emmanuel Abeere'inga", 
            title: "NDA CEO",
            initial: "E"
        },
        { 
            name: "Eng. Thompson Adongo", 
            title: "KR CEO",
            initial: "T"
        },
        { 
            name: "Prof. N.A. Browne-Klutse", 
            title: "EPA CEO",
            initial: "N"
        },
        { 
            name: "Samson Lardi Angenini", 
            title: "Legal Practitioner",
            initial: "S"
        },
        { 
            name: "Dr. Abu Sakara Foster", 
            title: "Board Member",
            initial: "A"
        },
        { 
            name: "Dr. Charles Abugre", 
            title: "ISODEC Founder",
            initial: "C"
        },
        { 
            name: "Anaama Mwinbisiana Esq.", 
            title: "Legal Practitioner (Board Secretary)",
            initial: "A"
        }
    ];

    // Company Facts Data (unchanged)
    const companyFacts = [
        {
            label: "Company Name",
            value: "KAKTUS RESOURCES LIMITED",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            label: "Type of Company",
            value: "Limited Liability (Limited by shares)",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            label: "Main Shareholders",
            value: (
                <div className="space-y-1">
                    <div>AAT</div>
                    <div>JT</div>
                    <div>AAP</div>
                    <div>WAA KAA</div>
                    <div>PNA</div>
                </div>
            ),
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            label: "Telephone",
            value: (
                <>
                    +233 54 390 0335<br />+233 50 434 6313
                </>
            ),
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            )
        },
        {
            label: "Employees",
            value: "36 professionals + Engineering Partners",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            label: "Address",
            value: "P. O. Box MD2134, Madina - Accra, Ghana.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            label: "Activities",
            value: "Engineering, Procurement and Construction + Management",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="w-full overflow-hidden bg-white">
            {/* ================= HERO SECTION ================= */}
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${hero1})` }}
                >
                    <div className="absolute inset-0 bg-[#0A5F3C]/80" />
                </div>
                
                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Kaktus Resources</h1>
                    <p className="text-lg md:text-xl max-w-2xl text-white/90">
                        Excellence in Eco Engineering and Green EPC Business
                    </p>
                    <div className="w-24 h-1 bg-[#FFB347] mt-8 rounded-full" />
                </div>
            </div>

            {/* ================= COMPANY OVERVIEW SECTION ================= */}
            <div data-section="overview" className="py-16 md:py-20 bg-[#F5F5DC]">
                <div className="container mx-auto px-6">
                    <div className={`max-w-4xl mx-auto transition-all duration-1000
                          ${inView.overview ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        
                        {/* Section Title */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-4 inline-block relative
                                after:content-[''] after:absolute after:-bottom-3 after:left-1/2 
                                after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#FFB347] 
                                after:rounded-full">
                                Company Overview
                            </h2>
                        </div>

                        {/* Vision & Mission Cards */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500
                                          border-l-4 border-[#FFB347] group hover:-translate-y-2">
                                <div className="w-14 h-14 rounded-full bg-[#FFB347]/10 flex items-center justify-center mb-6">
                                    <svg className="w-7 h-7 text-[#FFB347]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[#0A5F3C] mb-4">VISION</h3>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    KR's vision is to be the trademark of excellence in the Eco Engineering and Green EPC business.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500
                                          border-l-4 border-[#FFB347] group hover:-translate-y-2">
                                <div className="w-14 h-14 rounded-full bg-[#FFB347]/10 flex items-center justify-center mb-6">
                                    <svg className="w-7 h-7 text-[#FFB347]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[#0A5F3C] mb-4">MISSION</h3>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    KR's mission is to use client-centered business development for customer satisfaction and business sustainability. Our client-centered approach means we intend to design and develop custom-made products and services that employ modern and apt technologies to suit the budget of our clients, sustain our environment and at the same time be superior.
                                </p>
                            </div>
                        </div>

                        {/* Company Description - text-justify added */}
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed bg-white rounded-2xl p-8 shadow-lg text-justify">
                            <p>
                                <span className="text-[#FFB347] font-bold text-xl">KAKTUS RESOURCES</span> has in a decade developed treasured experience in construction nationally; with a reputation for delivering large, custom made and unique design-build projects ahead of schedule and on budget.
                            </p>
                            <p>
                                We have served various clientele and building owners through our period of existence. We have strived to exceed the needs and expectations of our clients and committed to quality, sustainability and safety which have always paid off in the success of our projects.
                            </p>
                            <p>
                                KR provides excellence in the full spectrum of pre-construction, project management, design development, construction, demolishing, modification, inspection and quality control services. KR continues to be the nexus of first class building services by employing and placing experienced professionals and cutting edge technologies on every project we undertake.
                            </p>
                            <p>
                                KR has always made our clients our team members who enhance our game plans and execution. Open Communications, respect for divergent ideas and preferences and an aura of partnership is a motivation that drives success for KR and our valued clients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= COMPANY FACTS SECTION ================= */}
            <div data-section="facts" className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className={`max-w-6xl mx-auto transition-all duration-1000
                          ${inView.facts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        
                        {/* Section Title */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-4 inline-block relative
                                after:content-[''] after:absolute after:-bottom-3 after:left-1/2 
                                after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#FFB347] 
                                after:rounded-full">
                                Company Facts
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Key information and statistics about Kaktus Resources Limited
                            </p>
                        </div>

                        {/* Company Facts Grid - 7 cards */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {companyFacts.map((fact, index) => (
                                <div
                                    key={index}
                                    className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                                              transition-all duration-500 hover:-translate-y-2
                                              border border-[#0A5F3C]/10 hover:border-[#FFB347]
                                              ${inView.facts ? 'animate-fade-in-up' : 'opacity-0'}`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0A5F3C]/10 to-[#FFB347]/10 
                                                  mx-auto mb-4 flex items-center justify-center text-[#FFB347]
                                                  group-hover:scale-110 group-hover:from-[#0A5F3C]/20 group-hover:to-[#FFB347]/20 
                                                  transition-all duration-500">
                                        {fact.icon}
                                    </div>
                                    <h3 className="text-sm font-semibold text-[#FFB347] uppercase tracking-wider mb-2 text-center">
                                        {fact.label}
                                    </h3>
                                    <div className="text-[#0A5F3C] font-medium text-center text-sm">
                                        {fact.value}
                                    </div>
                                    <div className="w-12 h-1 bg-[#FFB347]/30 mx-auto mt-4 rounded-full 
                                                  group-hover:w-16 group-hover:bg-[#FFB347] transition-all duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= BOARD OF DIRECTORS SECTION - COMMENTED OUT ================= */}
            {/*
            <div data-section="leadership" className="py-16 md:py-20 bg-[#F5F5DC]">
                <div className="container mx-auto px-6">
                    <div className={`max-w-6xl mx-auto transition-all duration-1000
                          ${inView.leadership ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-4 inline-block relative
                                after:content-[''] after:absolute after:-bottom-3 after:left-1/2 
                                after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#FFB347] 
                                after:rounded-full">
                                Board of Directors
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Our distinguished board guiding Kaktus Resources towards excellence
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {boardMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                                              transition-all duration-500 hover:-translate-y-2 text-center
                                              border border-[#0A5F3C]/10 hover:border-[#FFB347]
                                              ${inView.leadership ? 'animate-fade-in-up' : 'opacity-0'}`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0A5F3C] to-[#FFB347] 
                                                  mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold
                                                  group-hover:scale-110 transition-transform duration-500
                                                  shadow-lg group-hover:shadow-xl">
                                        {member.initial}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0A5F3C] mb-1">{member.name}</h3>
                                    <p className="text-[#FFB347] font-semibold mb-2">{member.title}</p>
                                    <div className="w-12 h-1 bg-[#FFB347]/30 mx-auto mt-4 rounded-full 
                                                  group-hover:w-16 group-hover:bg-[#FFB347] transition-all duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            */}

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
                            <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">Expert Professionals</div>
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
                    <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-2xl border border-[#FFB347]/20 
                                  max-w-4xl mx-auto relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFB347] to-[#0A5F3C]" />
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-4">
                            Ready to Work With Us?
                        </h2>
                        
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                            Let's discuss how Kaktus Resources can bring your vision to life
                            with our expertise and commitment to excellence.
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
                                to="/services"
                                className="inline-flex items-center border-2 border-[#0A5F3C] text-[#0A5F3C] 
                                         font-bold px-8 py-4 rounded-lg hover:bg-[#0A5F3C] hover:text-white 
                                         transform hover:-translate-y-1 transition-all duration-300 
                                         shadow-lg hover:shadow-xl group"
                            >
                                Our Services
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

export default About;