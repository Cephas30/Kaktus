// pages/Contact.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import images
import hero1 from "../assets/images/hero1.jpg";

const Contact = () => {
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

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Phone",
            details: (
                <>
                    +233 54 390 0335<br />
                    +233 50 434 6313
                </>
            ),
            action: "tel:+233543900335",
            actionText: "Call Us Now"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Email",
            details: "info@kaktusresources.com",
            action: "mailto:info@kaktusresources.com",
            actionText: "Send Email"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Address",
            details: "P. O. Box MD2134, Madina - Accra, Ghana",
            action: "https://maps.google.com/?q=Madina+Accra+Ghana",
            actionText: "Get Directions"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Working Hours",
            details: "Mon - Fri: 8:00 AM - 5:00 PM",
            action: null,
            actionText: null
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
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl md:text-2xl max-w-3xl text-white/90">
                        Get in touch with us for your engineering and construction needs
                    </p>
                    
                    {/* Decorative line */}
                    <div className="w-24 h-1 bg-[#FFB347] mt-8 rounded-full" />
                </div>
            </div>

            {/* ================= CONTACT INFORMATION CARDS ================= */}
            <div data-section="info" className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto
                          ${inView.info ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                         style={{ transition: 'all 0.8s ease' }}>
                        
                        {contactInfo.map((item, index) => (
                            <div
                                key={index}
                                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                                          transition-all duration-500 hover:-translate-y-2 text-center
                                          border border-[#0A5F3C]/10 hover:border-[#FFB347]
                                          animate-fade-in-up`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Icon Circle */}
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0A5F3C]/10 to-[#FFB347]/10 
                                              mx-auto mb-4 flex items-center justify-center text-[#FFB347]
                                              group-hover:scale-110 group-hover:from-[#0A5F3C]/20 group-hover:to-[#FFB347]/20 
                                              transition-all duration-500">
                                    {item.icon}
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-lg font-bold text-[#0A5F3C] mb-2">{item.title}</h3>
                                
                                {/* Details */}
                                <div className="text-gray-600 text-sm mb-3">
                                    {item.details}
                                </div>
                                
                                {/* Action Link */}
                                {item.action && (
                                    <a
                                        href={item.action}
                                        className="inline-flex items-center text-[#FFB347] text-sm font-semibold 
                                                 hover:text-[#0A5F3C] transition-colors duration-300 group/link"
                                        target={item.action.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                    >
                                        {item.actionText}
                                        <span className="ml-1 group-hover/link:translate-x-1 transition-transform">→</span>
                                    </a>
                                )}
                                
                                {/* Decorative line */}
                                <div className="w-12 h-1 bg-[#FFB347]/30 mx-auto mt-4 rounded-full 
                                              group-hover:w-16 group-hover:bg-[#FFB347] transition-all duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= FAQ SECTION ================= */}
            <div data-section="faq" className="py-16 md:py-20 bg-[#F5F5DC]">
                <div className="container mx-auto px-6">
                    <div className={`max-w-4xl mx-auto transition-all duration-1000
                          ${inView.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        
                        {/* Section Title */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-4 inline-block relative
                                after:content-[''] after:absolute after:-bottom-3 after:left-1/2 
                                after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#FFB347] 
                                after:rounded-full">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Quick answers to common questions about our services
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    q: "What services does Kaktus Resources offer?",
                                    a: "We offer comprehensive services including Civil Engineering, Waste Management & Recycling, Sustainable Energy solutions, Pre-construction Planning, Project Management, Design Development, Construction Excellence, Demolition & Modification, and Quality Control."
                                },
                                {
                                    q: "How can I request a quote for my project?",
                                    a: "You can request a quote by calling us at +233 54 390 0335, emailing us at info@kaktusresources.com, or visiting our office. We'll get back to you within 24 hours."
                                },
                                {
                                    q: "Do you work on both commercial and residential projects?",
                                    a: "Yes, we handle projects of all scales - from residential buildings to large commercial and industrial complexes. Our team has experience across various sectors."
                                },
                                {
                                    q: "What areas do you serve?",
                                    a: "We primarily serve clients across Ghana, with our head office in Accra. We're equipped to handle projects nationwide and have experience working in all regions."
                                },
                                {
                                    q: "How long does a typical project take?",
                                    a: "Project timelines vary depending on scope and complexity. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
                                }
                            ].map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300
                                             border-l-4 border-[#FFB347] group"
                                >
                                    <h3 className="text-lg font-bold text-[#0A5F3C] mb-2 flex items-center">
                                        <span className="w-6 h-6 rounded-full bg-[#FFB347]/10 flex items-center justify-center 
                                                       text-[#FFB347] text-sm mr-3 group-hover:scale-110 transition-transform">
                                            {index + 1}
                                        </span>
                                        {faq.q}
                                    </h3>
                                    <p className="text-gray-600 ml-9">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= CTA SECTION ================= */}
            <div className="py-16 md:py-20 bg-gradient-to-br from-[#0A5F3C] to-[#0A5F3C]/90 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 10px 10px, #FFB347 2px, transparent 2px)`,
                        backgroundSize: '30px 30px'
                    }}
                />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Start Your Project?
                        </h2>
                        
                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                            Contact us today for a free consultation. Our team is ready to bring your vision to life.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="tel:+233543900335"
                                className="inline-flex items-center bg-[#FFB347] text-[#0A5F3C] font-bold 
                                         px-8 py-4 rounded-lg hover:bg-white transform hover:-translate-y-1 
                                         transition-all duration-300 shadow-lg hover:shadow-xl group"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Us Now
                            </a>
                            
                            <Link
                                to="/services"
                                className="inline-flex items-center border-2 border-white text-white 
                                         font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-[#0A5F3C] 
                                         transform hover:-translate-y-1 transition-all duration-300 
                                         shadow-lg hover:shadow-xl group"
                            >
                                Explore Our Services
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

export default Contact;