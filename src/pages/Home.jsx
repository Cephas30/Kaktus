import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import images
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
// Import featured images (1-4 .jpg, 5 .jpeg)
import featured1 from "../assets/images/featured1.jpg";
import featured2 from "../assets/images/featured2.jpg";
import featured3 from "../assets/images/featured3.jpg";
import featured4 from "../assets/images/featured4.jpg";
import featured5 from "../assets/images/featured5.jpeg";

const heroImages = [hero1, hero2, hero3];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
    const [inView, setInView] = useState({});
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    // Hero slideshow
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Projects slideshow
    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentProjectSlide((prev) => (prev + 1) % featuredProjects.length);
            }, 4000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    // Intersection Observer for animations
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

    const services = [
        {
            title: "Pre-construction Planning",
            description: "Strategic planning and feasibility studies for successful project inception.",
            icon: (className = "w-8 h-8") => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            title: "Project Management",
            description: "Expert oversight ensuring timely delivery within budget constraints.",
            icon: (className = "w-8 h-8") => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
        {
            title: "Design Development",
            description: "Innovative architectural solutions balancing form and function.",
            icon: (className = "w-8 h-8") => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            ),
        },
        {
            title: "Construction Excellence",
            description: "High-quality construction with superior craftsmanship and attention to detail.",
            icon: (className = "w-8 h-8") => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
        {
            title: "Demolition & Modification",
            description: "Safe, efficient demolition with expert structural modifications.",
            icon: (className = "w-8 h-8") => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            ),
        },
        {
            title: "Quality Control",
            description: "Rigorous inspection protocols ensuring highest standards of quality.",
            icon: (className = "w-8 h-8") => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
        },
    ];

    const features = [
        { text: "Decade of Excellence", icon: (className = "w-5 h-5") => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        )},
        { text: "Custom Design-Build Projects", icon: (className = "w-5 h-5") => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )},
        { text: "Ahead of Schedule Delivery", icon: (className = "w-5 h-5") => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )},
    ];

    const features2 = [
        { text: "Sustainable Construction", icon: (className = "w-5 h-5") => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )},
        { text: "Cutting-Edge Technology", icon: (className = "w-5 h-5") => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )},
        { text: "Safety-First Approach", icon: (className = "w-5 h-5") => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )},
    ];

    // Featured Projects Data with updated descriptions
    const featuredProjects = [
        {
            id: 1,
            title: "Thermal Power Plant",
            category: "Energy",
            location: "Ghana",
            image: featured1,
            description: "A state-of-the-art thermal power plant designed and constructed to boost national energy capacity.",
            features: ["High Efficiency", "Grid Integration", "Emissions Control"]
        },
        {
            id: 2,
            title: "Residential Apartments Complex",
            category: "Residential",
            location: "Accra, Ghana",
            image: featured2,
            description: "Modern residential apartment complex offering luxury living with premium amenities.",
            features: ["Modern Design", "Secure Environment", "Green Spaces"]
        },
        {
            id: 3,
            title: "Bosomkyekye Dam Design and Development",
            category: "Water / Dam",
            location: "Ghana",
            image: featured3,
            description: "Comprehensive dam development project ensuring water supply and irrigation for communities.",
            features: ["Water Storage", "Irrigation System", "Community Impact"]
        },
        {
            id: 4,
            title: "University Student Accommodation",
            category: "Education",
            location: "Northern Ghana",
            image: featured4,
            description: "Large-scale student housing facility providing comfortable and conducive living spaces.",
            features: ["Modern Dorms", "Recreational Areas", "Study Spaces"]
        },
        {
            id: 5,
            title: "Dam Detail Construction",
            category: "Water Infrastructure",
            location: "Ghana",
            image: featured5,
            description: "Detailed design and construction of dam structures for water resource management.",
            features: ["Structural Integrity", "Hydraulic Design", "Environmental Safety"]
        }
    ];

    const goToProjectSlide = (index) => {
        setCurrentProjectSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    const nextProjectSlide = () => {
        setCurrentProjectSlide((prev) => (prev + 1) % featuredProjects.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    const prevProjectSlide = () => {
        setCurrentProjectSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    // Modal functions
    const openModal = (index) => {
        setModalIndex(index);
        setModalOpen(true);
        setIsAutoPlaying(false); // pause autoplay
    };

    const closeModal = () => {
        setModalOpen(false);
        setIsAutoPlaying(true); // resume autoplay after modal closes
    };

    const nextModal = () => {
        setModalIndex((prev) => (prev + 1) % featuredProjects.length);
    };

    const prevModal = () => {
        setModalIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    };

    // Handle keyboard navigation in modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!modalOpen) return;
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowRight") nextModal();
            if (e.key === "ArrowLeft") prevModal();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [modalOpen]);

    return (
        <div className="w-full overflow-hidden">
            {/* ================= HERO SECTION ================= */}
            <div className="relative w-full h-screen overflow-hidden">
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className="absolute inset-0 transition-opacity duration-1500 ease-in-out"
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            opacity: currentSlide === index ? 1 : 0,
                            zIndex: 0,
                        }}
                    />
                ))}
                <div className="absolute inset-0 bg-black/45 z-10" />
                <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-end items-center text-center text-white pb-12 md:pb-24">
                    <h1 className="text-4xl md:text-7xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        Welcome to Kaktus Resources
                    </h1>
                    <h2 className="text-xl md:text-3xl mb-8 max-w-[85%] md:max-w-[55%]" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                        Building Excellence, Delivering Quality
                    </h2>
                    <Link to="/services" className="bg-[#FFB347] text-[#0A5F3C] font-bold px-8 py-3 rounded-lg text-lg hover:bg-[#e69e3d] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Explore Services
                    </Link>
                </div>
            </div>

            {/* ================= WAVES DIVIDER ================= */}
            <div className="h-40 relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5F5DC]">
                    <div className="absolute bottom-0 left-0 right-0 h-24 animate-float"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230A5F3C' fill-opacity='0.1' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
                            backgroundSize: "cover",
                        }}
                    />
                </div>
            </div>

            {/* ================= ABOUT SECTION ================= */}
            <div data-section="about" className="py-16 md:py-24 bg-[#F5F5DC] relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute top-[10%] left-[5%] w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#0A5F3C]/5 animate-float-slow" />
                <div className="absolute bottom-[20%] right-[10%] w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#FFB347]/5 animate-float-slower" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className={`grid md:grid-cols-2 gap-12 items-start transition-all duration-1000 ${inView.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-6 relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-20 after:h-1 after:bg-[#FFB347] after:rounded-full after:animate-pulse-slow">
                                Building Excellence Since Inception
                            </h2>
                            {/* Added text-justify to this container */}
                            <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                                <p><span className="text-[#FFB347] font-semibold">KAKTUS RESOURCES</span> has in a decade developed treasured experience in construction nationally; with a reputation for delivering large, custom made and unique design-build projects ahead of schedule and on budget.</p>
                                <p>We have served various clientele and building owners through our period of existence. We have strived to exceed the needs and expectations of our clients and committed to quality, sustainability and safety which have always paid off in the success of our projects.</p>
                                <p>KR provides excellence in the full spectrum of pre-construction, project management, design development, construction, demolishing, modification, inspection and quality control services. KR continues to be the nexus of first class building services by employing and placing experienced professionals and cutting edge technologies on every project we undertake.</p>
                                <p>KR has always made our clients our team members who enhance our game plans and execution. Open Communications, respect for divergent ideas and preferences and an aura of partnership is a motivation that drives success for KR and our valued clients.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="space-y-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className={`flex items-center p-3 bg-white/70 rounded-lg hover:translate-x-2 hover:bg-white/90 transition-all duration-300 hover:shadow-md cursor-default ${inView.about ? `animate-slide-in` : 'opacity-0'}`} style={{ animationDelay: `${index * 200}ms` }}>
                                            <div className="w-8 h-8 rounded-full bg-[#FFB347]/10 flex items-center justify-center mr-3 text-[#FFB347]">
                                                {feature.icon("w-4 h-4")}
                                            </div>
                                            <span className="text-gray-700 text-sm font-semibold">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    {features2.map((feature, index) => (
                                        <div key={index} className={`flex items-center p-3 bg-white/70 rounded-lg hover:translate-x-2 hover:bg-white/90 transition-all duration-300 hover:shadow-md cursor-default ${inView.about ? `animate-slide-in` : 'opacity-0'}`} style={{ animationDelay: `${(index + 3) * 200}ms` }}>
                                            <div className="w-8 h-8 rounded-full bg-[#FFB347]/10 flex items-center justify-center mr-3 text-[#FFB347]">
                                                {feature.icon("w-4 h-4")}
                                            </div>
                                            <span className="text-gray-700 text-sm font-semibold">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Link to="/about" className="inline-flex items-center bg-[#FFB347] text-[#0A5F3C] font-bold px-6 py-3 rounded-lg hover:bg-[#e69e3d] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group">
                                Learn More About Us
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                        <div className="relative md:sticky md:top-24">
                            <div className="absolute -top-5 -right-5 w-full h-full border-4 border-[#FFB347] rounded-2xl animate-pulse-slow" />
                            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                                <img src={hero1} alt="About Kaktus Resources" className="w-full rounded-2xl shadow-2xl" />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0A5F3C]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= SERVICES SECTION ================= */}
            <div data-section="services" className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 10px 10px, #0A5F3C 2px, transparent 2px)`, backgroundSize: '30px 30px' }} />
                <div className="container mx-auto px-6 relative z-10">
                    <div className={`text-center mb-16 transition-all duration-1000 ${inView.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-4 inline-block relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#FFB347] after:rounded-full after:animate-pulse-slow">
                            Our Core Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Comprehensive construction solutions tailored to meet the unique demands of each project, delivered with precision and excellence.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className={`group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#0A5F3C]/10 hover:border-[#FFB347] hover:-translate-y-2 hover:scale-105 ${inView.services ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="w-16 h-16 rounded-full bg-[#FFB347]/10 flex items-center justify-center mb-6 text-[#FFB347] group-hover:animate-bounce-slow">
                                    {service.icon("w-8 h-8")}
                                </div>
                                <h3 className="text-xl font-bold text-[#0A5F3C] mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${inView.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <Link to="/services" className="inline-flex items-center border-2 border-[#FFB347] text-[#FFB347] font-bold px-8 py-3 rounded-lg hover:bg-[#FFB347] hover:text-[#0A5F3C] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group">
                            Explore All Services
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ================= STATS SECTION ================= */}
            <div data-section="stats" className="py-16 md:py-24 bg-gradient-to-br from-[#0A5F3C] to-[#0A5F3C]/90 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 10px 10px, #FFB347 2px, transparent 2px)`, backgroundSize: '30px 30px' }} />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "10+", label: "Years Experience" },
                            { value: "100+", label: "Projects Completed" },
                            { value: "50+", label: "Expert Professionals" },
                            { value: "100%", label: "Client Satisfaction" },
                        ].map((stat, index) => (
                            <div key={index} className={`text-center p-6 transition-all duration-1000 ${inView.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-3">{stat.value}</div>
                                <div className="text-[#FFB347] text-sm md:text-base font-semibold uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= FEATURED PROJECTS SLIDESHOW SECTION ================= */}
            <div data-section="projects" className="py-16 md:py-24 bg-[#F5F5DC] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 10px 10px, #0A5F3C 2px, transparent 2px)`, backgroundSize: '30px 30px' }} />
                <div className="container mx-auto px-6 relative z-10">
                    <div className={`text-center mb-12 transition-all duration-1000 ${inView.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-4 inline-block relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#FFB347] after:rounded-full after:animate-pulse-slow">
                            Featured Projects
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Showcasing our finest work and commitment to excellence in construction</p>
                    </div>

                    {/* Main Slideshow Container */}
                    <div className={`relative max-w-6xl mx-auto transition-all duration-1000 ${inView.projects ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        {/* Slides */}
                        <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                            {featuredProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`absolute inset-0 transition-all duration-1000 ease-in-out cursor-pointer ${index === currentProjectSlide ? 'opacity-100 translate-x-0' : index < currentProjectSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}`}
                                    onClick={() => openModal(index)}
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                    </div>
                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                                        <div className="max-w-3xl">
                                            <span className="inline-block bg-[#FFB347] text-[#0A5F3C] font-bold px-4 py-2 rounded-full text-sm mb-4">{project.category}</span>
                                            <h3 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h3>
                                            <div className="flex items-center text-white/80 mb-4">
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {project.location}
                                            </div>
                                            <p className="text-white/90 text-lg mb-6 max-w-2xl">{project.description}</p>
                                            <div className="flex flex-wrap gap-3 mb-8">
                                                {project.features.map((feature, idx) => (
                                                    <span key={idx} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30">{feature}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Navigation Arrows */}
                            <button onClick={prevProjectSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full hover:bg-[#FFB347] transition-all duration-300 flex items-center justify-center text-white hover:text-[#0A5F3C] z-20" aria-label="Previous project">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button onClick={nextProjectSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full hover:bg-[#FFB347] transition-all duration-300 flex items-center justify-center text-white hover:text-[#0A5F3C] z-20" aria-label="Next project">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className="flex justify-center mt-6 space-x-3">
                            {featuredProjects.map((project, index) => (
                                <button key={project.id} onClick={() => goToProjectSlide(index)} className={`group relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${index === currentProjectSlide ? 'ring-4 ring-[#FFB347] scale-110' : 'ring-2 ring-[#0A5F3C]/30 hover:ring-[#FFB347]'}`}>
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                    <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${index === currentProjectSlide ? 'opacity-0' : 'opacity-100'}`} />
                                </button>
                            ))}
                        </div>

                        {/* Slide Indicators (for mobile) */}
                        <div className="flex justify-center mt-4 space-x-2 md:hidden">
                            {featuredProjects.map((_, index) => (
                                <button key={index} onClick={() => goToProjectSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${index === currentProjectSlide ? 'w-8 bg-[#FFB347]' : 'w-2 bg-[#0A5F3C]/30'}`} aria-label={`Go to slide ${index + 1}`} />
                            ))}
                        </div>
                    </div>

                    {/* View All Projects Button */}
                    <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${inView.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <Link to="/projects" className="inline-flex items-center border-2 border-[#0A5F3C] text-[#0A5F3C] font-bold px-8 py-3 rounded-lg hover:bg-[#0A5F3C] hover:text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group">
                            View All Projects
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ================= CTA SECTION ================= */}
            <div data-section="cta" className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[#FFB347]/5 animate-pulse-slow" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className={`bg-white rounded-3xl p-8 md:p-16 text-center shadow-2xl border border-[#FFB347]/20 relative overflow-hidden transition-all duration-1000 ${inView.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFB347] to-[#0A5F3C] animate-pulse-slow" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-6">Ready to Build Your Vision?</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">Let's discuss how Kaktus Resources can bring your project to life with our expertise, innovation, and commitment to excellence.</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/contact" className="inline-flex items-center bg-[#FFB347] text-[#0A5F3C] font-bold px-8 py-4 rounded-lg hover:bg-[#e69e3d] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group">
                                Start Your Project
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                            <Link to="/projects" className="inline-flex items-center border-2 border-[#0A5F3C] text-[#0A5F3C] font-bold px-8 py-4 rounded-lg hover:bg-[#0A5F3C] hover:text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group">
                                View Our Portfolio
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= MODAL / LIGHTBOX ================= */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4" onClick={closeModal}>
                    <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
                        {/* Close button */}
                        <button onClick={closeModal} className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-[#FFB347] text-white hover:text-[#0A5F3C] transition-all duration-300 flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal content */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                            {/* Image side */}
                            <div className="md:w-3/5 h-64 md:h-auto relative bg-black">
                                <img src={featuredProjects[modalIndex].image} alt={featuredProjects[modalIndex].title} className="w-full h-full object-contain" />
                                {/* Navigation arrows on image */}
                                <button onClick={prevModal} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm hover:bg-[#FFB347] text-white hover:text-[#0A5F3C] transition-all duration-300 flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button onClick={nextModal} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm hover:bg-[#FFB347] text-white hover:text-[#0A5F3C] transition-all duration-300 flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                            {/* Details side */}
                            <div className="md:w-2/5 p-8 bg-white flex flex-col">
                                <span className="inline-block bg-[#FFB347] text-[#0A5F3C] font-bold px-4 py-2 rounded-full text-sm mb-4 self-start">
                                    {featuredProjects[modalIndex].category}
                                </span>
                                <h2 className="text-3xl font-bold text-[#0A5F3C] mb-2">{featuredProjects[modalIndex].title}</h2>
                                <div className="flex items-center text-gray-600 mb-4">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {featuredProjects[modalIndex].location}
                                </div>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">{featuredProjects[modalIndex].description}</p>
                                <h3 className="text-xl font-bold text-[#0A5F3C] mb-3">Key Features</h3>
                                <ul className="space-y-2 mb-6">
                                    {featuredProjects[modalIndex].features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <svg className="w-5 h-5 text-[#FFB347] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="mt-auto bg-[#FFB347] text-[#0A5F3C] font-bold px-6 py-3 rounded-lg hover:bg-[#e69e3d] transition-all duration-300 text-center">
                                    Inquire About This Project
                                </Link>
                            </div>
                        </div>

                        {/* Thumbnail strip at bottom of modal */}
                        <div className="flex justify-center mt-4 space-x-2">
                            {featuredProjects.map((project, idx) => (
                                <button key={project.id} onClick={() => setModalIndex(idx)} className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${idx === modalIndex ? 'ring-4 ring-[#FFB347] scale-110' : 'ring-2 ring-white/50 hover:ring-[#FFB347]'}`}>
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Add custom CSS animations */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                @keyframes float-slower {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.05); }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes slide-in {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-float { animation: float 3s ease-in-out infinite; }
                .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
                .animate-float-slower { animation: float-slower 5s ease-in-out infinite; }
                .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
                .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
                .animate-slide-in { animation: slide-in 0.8s ease-out forwards; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
                .duration-1500 { transition-duration: 1500ms; }
                .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
            `}</style>
        </div>
    );
};

export default Home;