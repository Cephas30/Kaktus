// pages/Projects.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import images
import featured4 from "../assets/images/featured4.jpg";
import featured2 from "../assets/images/featured2.jpg";
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import r1 from "../assets/images/r1.jpg";
import r2 from "../assets/images/r2.jpg";
import s1 from "../assets/images/s1.jpg";
import s2 from "../assets/images/s2.jpg";
import s3 from "../assets/images/s3.jpg";
import s4 from "../assets/images/s4.jpg";
import s5 from "../assets/images/s5.jpg";
import s6 from "../assets/images/s6.jpg";

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [inView, setInView] = useState({});
    const [selectedProject, setSelectedProject] = useState(null);

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

    // Project Categories
    const categories = [
        { id: "all", name: "All Projects" },
        { id: "civil", name: "Civil Engineering" },
        { id: "waste", name: "Waste Management & Recycling" },
        { id: "energy", name: "Sustainable Energy" }
    ];

    // Projects Data
    const projects = [
        // Civil Engineering Projects
        {
            id: 1,
            title: "University Student Accommodation",
            category: "civil",
            categoryName: "Civil Engineering",
            location: "Northern Ghana",
            image: featured4,
            description: "Large-scale student housing facility providing comfortable and conducive living spaces.",
            completion: "2023",
            features: ["Modern dorms", "Recreational areas", "Study spaces", "Cafeteria"]
        },
        {
            id: 2,
            title: "Residential Apartments Complex",
            category: "civil",
            categoryName: "Civil Engineering",
            location: "Accra, Ghana",
            image: featured2,
            description: "Modern residential apartment complex offering luxury living with premium amenities.",
            completion: "2022",
            features: ["Modern design", "Secure environment", "Green spaces", "Parking"]
        },
        {
            id: 3,
            title: "Hospital Hostel Facility",
            category: "civil",
            categoryName: "Civil Engineering",
            location: "Hwediem, Ghana",
            image: c1,
            description: "Hostel facility for Hwediem Hospital to accommodate staff and patients' relatives.",
            completion: "2023",
            features: ["50 rooms", "Common areas", "Kitchen", "24/7 security"]
        },
        {
            id: 4,
            title: "Church of Christ Building",
            category: "civil",
            categoryName: "Civil Engineering",
            location: "Kwadaso Agric, Ghana",
            image: c2,
            description: "Construction of a modern church building for the Church of Christ congregation.",
            completion: "2022",
            features: ["Main sanctuary", "Sunday school rooms", "Pastor's office", "Baptistry"]
        },
        {
            id: 5,
            title: "Church Building Project",
            category: "civil",
            categoryName: "Civil Engineering",
            location: "Ghana",
            image: c3,
            description: "Construction of a new church building with modern facilities.",
            completion: "2023",
            features: ["Worship hall", "Children's area", "Fellowship hall", "Parking"]
        },

        // Waste Management & Recycling Projects
        {
            id: 6,
            title: "Research and Development Facility",
            category: "waste",
            categoryName: "Waste Management & Recycling",
            location: "Accra, Ghana",
            image: r1,
            description: "State-of-the-art R&D center focused on innovative waste processing technologies.",
            completion: "2023",
            features: ["Research labs", "Pilot plant", "Testing facilities", "Training center"]
        },
        {
            id: 7,
            title: "Solid Waste Damp Site Development",
            category: "waste",
            categoryName: "Waste Management & Recycling",
            location: "Kumasi, Ghana",
            image: r2,
            description: "Development of engineered damp site for safe solid waste disposal and management.",
            completion: "2022",
            features: ["Lined cells", "Leachate treatment", "Gas capture", "Monitoring systems"]
        },

        // Sustainable Energy Projects
        {
            id: 8,
            title: "Thermal Power Plant",
            category: "energy",
            categoryName: "Sustainable Energy",
            location: "Ghana",
            image: s1,
            description: "State-of-the-art thermal power plant designed and constructed to boost national energy capacity.",
            completion: "2023",
            features: ["High efficiency", "Grid integration", "Emissions control", "Backup systems"]
        },
        {
            id: 9,
            title: "Bosomkyekye Dam Design and Development",
            category: "energy",
            categoryName: "Sustainable Energy",
            location: "Ghana",
            image: s2,
            description: "Comprehensive dam development project ensuring water supply and irrigation for communities.",
            completion: "2022",
            features: ["Water storage", "Irrigation system", "Community impact", "Hydropower"]
        },
        {
            id: 10,
            title: "Dam Detail Construction",
            category: "energy",
            categoryName: "Sustainable Energy",
            location: "Ghana",
            image: s3,
            description: "Detailed design and construction of dam structures for water resource management.",
            completion: "2023",
            features: ["Structural integrity", "Hydraulic design", "Environmental safety", "Monitoring"]
        },
        {
            id: 11,
            title: "Wind Farm",
            category: "energy",
            categoryName: "Sustainable Energy",
            location: "Coastal Region, Ghana",
            image: s4,
            description: "Development of wind farm harnessing coastal winds for clean energy generation.",
            completion: "2023",
            features: ["10 turbines", "30 MW capacity", "Grid connection", "Environmental studies"]
        },
        {
            id: 12,
            title: "Transmission Station",
            category: "energy",
            categoryName: "Sustainable Energy",
            location: "Ghana",
            image: s5,
            description: "Construction of electrical transmission station to support renewable energy integration.",
            completion: "2022",
            features: ["Substation", "Transformers", "Switchgear", "Control systems"]
        },
        {
            id: 13,
            title: "Sustainable Energy Project",
            category: "energy",
            categoryName: "Sustainable Energy",
            location: "Ghana",
            image: s6,
            description: "Innovative sustainable energy initiative (details to be updated).",
            completion: "2023",
            features: ["Under development", "Green technology", "Community focused"]
        }
    ];

    // Group projects by category
    const civilProjects = projects.filter(p => p.category === "civil");
    const wasteProjects = projects.filter(p => p.category === "waste");
    const energyProjects = projects.filter(p => p.category === "energy");

    // Filter projects based on active category
    const filteredProjects = activeCategory === "all" 
        ? projects 
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="w-full overflow-hidden bg-white">
            {/* ================= HERO SECTION (using c2 - Church of Christ) ================= */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${c2})` }}
                >
                    <div className="absolute inset-0 bg-[#0A5F3C]/80" />
                </div>
                
                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Projects</h1>
                    <p className="text-xl md:text-2xl max-w-3xl text-white/90">
                        Delivering excellence across civil engineering, waste management, and sustainable energy
                    </p>
                    <div className="w-24 h-1 bg-[#FFB347] mt-8 rounded-full" />
                </div>
            </div>

            {/* ================= CATEGORY FILTER ================= */}
            <div className="py-8 bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300
                                          ${activeCategory === category.id
                                            ? 'bg-[#FFB347] text-[#0A5F3C] shadow-lg scale-105'
                                            : 'bg-gray-100 text-gray-600 hover:bg-[#FFB347]/20 hover:text-[#0A5F3C]'
                                          }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= CIVIL ENGINEERING SECTION ================= */}
            {(activeCategory === "all" || activeCategory === "civil") && (
                <div data-section="civil" className="py-16 md:py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className={`max-w-7xl mx-auto transition-all duration-1000
                              ${inView.civil ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-4 inline-block relative
                                    after:content-[''] after:absolute after:-bottom-3 after:left-1/2 
                                    after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#FFB347] 
                                    after:rounded-full">
                                    Civil Engineering
                                </h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Building the foundation for tomorrow's infrastructure
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {civilProjects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className={`group bg-white rounded-2xl overflow-hidden shadow-lg 
                                                  hover:shadow-2xl transition-all duration-500 
                                                  hover:-translate-y-2 cursor-pointer
                                                  border border-gray-100
                                                  ${inView.civil ? 'animate-fade-in-up' : 'opacity-0'}`}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                                                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute top-4 left-4 bg-[#FFB347] text-[#0A5F3C] 
                                                          px-3 py-1 rounded-full text-xs font-bold">
                                                {project.categoryName}
                                            </div>
                                            <div className="absolute top-4 right-4 bg-white/90 text-[#0A5F3C] 
                                                          px-3 py-1 rounded-full text-xs font-bold">
                                                {project.completion}
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-[#0A5F3C] mb-2 group-hover:text-[#FFB347] 
                                                         transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center text-gray-500 text-sm mb-3">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {project.location}
                                            </div>
                                            <p className="text-gray-600 mb-4 line-clamp-2">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.features.slice(0, 2).map((feature, idx) => (
                                                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                        {feature}
                                                    </span>
                                                ))}
                                                {project.features.length > 2 && (
                                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                        +{project.features.length - 2} more
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center text-[#FFB347] font-semibold group/link">
                                                <span>View Project Details</span>
                                                <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" 
                                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ================= WASTE MANAGEMENT & RECYCLING SECTION ================= */}
            {(activeCategory === "all" || activeCategory === "waste") && (
                <div data-section="waste" className="py-16 md:py-20 bg-[#F5F5DC]">
                    <div className="container mx-auto px-6">
                        <div className={`max-w-7xl mx-auto transition-all duration-1000
                              ${inView.waste ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-4 inline-block relative
                                    after:content-[''] after:absolute after:-bottom-3 after:left-1/2 
                                    after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#FFB347] 
                                    after:rounded-full">
                                    Waste Management & Recycling
                                </h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Creating sustainable solutions for a cleaner tomorrow
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {wasteProjects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className={`group bg-white rounded-2xl overflow-hidden shadow-lg 
                                                  hover:shadow-2xl transition-all duration-500 
                                                  hover:-translate-y-2 cursor-pointer
                                                  border border-gray-100
                                                  ${inView.waste ? 'animate-fade-in-up' : 'opacity-0'}`}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                                                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute top-4 left-4 bg-[#FFB347] text-[#0A5F3C] 
                                                          px-3 py-1 rounded-full text-xs font-bold">
                                                {project.categoryName}
                                            </div>
                                            <div className="absolute top-4 right-4 bg-white/90 text-[#0A5F3C] 
                                                          px-3 py-1 rounded-full text-xs font-bold">
                                                {project.completion}
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-[#0A5F3C] mb-2 group-hover:text-[#FFB347] 
                                                         transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center text-gray-500 text-sm mb-3">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {project.location}
                                            </div>
                                            <p className="text-gray-600 mb-4 line-clamp-2">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.features.slice(0, 2).map((feature, idx) => (
                                                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                        {feature}
                                                    </span>
                                                ))}
                                                {project.features.length > 2 && (
                                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                        +{project.features.length - 2} more
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center text-[#FFB347] font-semibold group/link">
                                                <span>View Project Details</span>
                                                <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" 
                                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ================= SUSTAINABLE ENERGY SECTION ================= */}
            {(activeCategory === "all" || activeCategory === "energy") && (
                <div data-section="energy" className="py-16 md:py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className={`max-w-7xl mx-auto transition-all duration-1000
                              ${inView.energy ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#0A5F3C] mb-4 inline-block relative
                                    after:content-[''] after:absolute after:-bottom-3 after:left-1/2 
                                    after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#FFB347] 
                                    after:rounded-full">
                                    Sustainable Energy
                                </h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Powering the future with renewable energy solutions
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {energyProjects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className={`group bg-white rounded-2xl overflow-hidden shadow-lg 
                                                  hover:shadow-2xl transition-all duration-500 
                                                  hover:-translate-y-2 cursor-pointer
                                                  border border-gray-100
                                                  ${inView.energy ? 'animate-fade-in-up' : 'opacity-0'}`}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                                                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute top-4 left-4 bg-[#FFB347] text-[#0A5F3C] 
                                                          px-3 py-1 rounded-full text-xs font-bold">
                                                {project.categoryName}
                                            </div>
                                            <div className="absolute top-4 right-4 bg-white/90 text-[#0A5F3C] 
                                                          px-3 py-1 rounded-full text-xs font-bold">
                                                {project.completion}
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-[#0A5F3C] mb-2 group-hover:text-[#FFB347] 
                                                         transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center text-gray-500 text-sm mb-3">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {project.location}
                                            </div>
                                            <p className="text-gray-600 mb-4 line-clamp-2">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.features.slice(0, 2).map((feature, idx) => (
                                                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                        {feature}
                                                    </span>
                                                ))}
                                                {project.features.length > 2 && (
                                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                        +{project.features.length - 2} more
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center text-[#FFB347] font-semibold group/link">
                                                <span>View Project Details</span>
                                                <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" 
                                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ================= STATS SECTION (like Home page) ================= */}
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
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">50+</div>
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
                            Have a Project in Mind?
                        </h2>
                        
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                            Let's discuss how Kaktus Resources can bring your vision to life
                            with our expertise across civil engineering, waste management, and sustainable energy.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center bg-[#FFB347] text-[#0A5F3C] font-bold 
                                         px-8 py-4 rounded-lg hover:bg-[#e69e3d] transform hover:-translate-y-1 
                                         transition-all duration-300 shadow-lg hover:shadow-xl group"
                            >
                                Start Your Project
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

            {/* ================= PROJECT MODAL (no client field) ================= */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                     onClick={() => setSelectedProject(null)}>
                    <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                         onClick={e => e.stopPropagation()}>
                        
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg 
                                     flex items-center justify-center text-gray-600 hover:text-[#FFB347] 
                                     hover:rotate-90 transition-all duration-300 z-10"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="relative h-[400px]">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute top-6 left-6 bg-[#FFB347] text-[#0A5F3C] 
                                          px-4 py-2 rounded-full text-sm font-bold">
                                {selectedProject.categoryName}
                            </div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    {selectedProject.title}
                                </h2>
                                <div className="flex items-center text-white/80">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {selectedProject.location}
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2">
                                    <h3 className="text-2xl font-bold text-[#0A5F3C] mb-4">Project Overview</h3>
                                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                        {selectedProject.description}
                                    </p>
                                    
                                    <h3 className="text-2xl font-bold text-[#0A5F3C] mb-4">Key Features</h3>
                                    <ul className="grid grid-cols-2 gap-3">
                                        {selectedProject.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-gray-700">
                                                <svg className="w-5 h-5 text-[#FFB347] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-[#F5F5DC] rounded-2xl p-6">
                                    <h3 className="text-xl font-bold text-[#0A5F3C] mb-4">Project Details</h3>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-sm text-[#FFB347] font-semibold">Completion Year</div>
                                            <div className="text-[#0A5F3C] font-bold">{selectedProject.completion}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-[#FFB347] font-semibold">Location</div>
                                            <div className="text-[#0A5F3C] font-bold">{selectedProject.location}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-[#FFB347] font-semibold">Category</div>
                                            <div className="text-[#0A5F3C] font-bold">{selectedProject.categoryName}</div>
                                        </div>
                                    </div>

                                    <Link
                                        to="/contact"
                                        className="mt-6 w-full inline-flex items-center justify-center bg-[#FFB347] 
                                                 text-[#0A5F3C] font-bold px-6 py-3 rounded-lg 
                                                 hover:bg-[#e69e3d] transition-all duration-300 group"
                                    >
                                        Inquire About This Project
                                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default Projects;