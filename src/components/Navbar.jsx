import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const getActiveLink = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    if (path === '/about') return 'About';
    if (path === '/services' || path.startsWith('/services/')) return 'Services';
    if (path === '/projects') return 'Our Projects';
    if (path === '/contact') return 'Contacts';
    return 'Home';
  };

  const [activeLink, setActiveLink] = useState(getActiveLink());

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Our Projects', path: '/projects' },
    { name: 'Contacts', path: '/contact' }
  ];

  const serviceItems = [
    { name: 'Civil Engineering', path: '/services/civil-engineering' },
    { name: 'Sustainable Energy', path: '/services/sustainable-energy' },
    { name: 'Waste Management', path: '/services/waste-management' },
    { name: 'ICT Infrastructure', path: '/services/ict-infrastructure' },
    { name: 'Agriculture Estate', path: '/services/agriculture-estate' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(getActiveLink());
    setIsOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <nav className={`fixed w-full top-6 z-50 transition-all duration-300 px-6`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center z-10">
          <img
            src="/logo.jpg"
            alt="Kaktus Resources"
            className={`h-12 w-auto transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-90'}`}
            style={{
              ...(!isScrolled && {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '4px 8px',
                borderRadius: '8px'
              })
            }}
            onError={(e) => {
              console.log('Logo failed to load');
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className={`text-2xl font-bold ml-2 hidden ${isScrolled ? 'text-[#0A5F3C]' : 'text-white'}`}>
            Kaktus Resources
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <div className={`inline-flex rounded-full transition-all duration-300 overflow-visible ${
            isScrolled ? 'bg-white shadow-lg' : 'bg-white/10 backdrop-blur-md border border-white/20'
          }`}>
            {navLinks.map((link, index) => (
              <div 
                key={link.name} 
                className="relative"
                ref={link.hasDropdown ? dropdownRef : null}
              >
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={toggleServicesDropdown}
                      className={`px-6 py-3 transition-all duration-300 inline-flex items-center gap-1
                        ${index === 0 ? 'pl-8' : index === navLinks.length - 1 ? 'pr-8' : ''}
                        ${activeLink === link.name
                          ? isScrolled
                            ? 'bg-[#0A5F3C] text-white'
                            : 'bg-white/20 text-white backdrop-blur-sm'
                          : isScrolled
                            ? 'text-gray-700 hover:bg-[#0A5F3C]/10 hover:text-[#0A5F3C]'
                            : 'text-white/90 hover:bg-white/20 hover:text-white'
                        }`}
                    >
                      <span>{link.name}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {servicesDropdownOpen && (
                      <div 
                        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 min-w-max rounded-xl overflow-hidden shadow-xl z-50 ${
                          isScrolled 
                            ? 'bg-white border border-gray-200' 
                            : 'bg-white/10 backdrop-blur-md border border-white/20'
                        }`}
                      >
                        <div className="py-2">
                          {serviceItems.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              onClick={() => {
                                setActiveLink('Services');
                                setServicesDropdownOpen(false);
                              }}
                              className={`block px-4 py-2.5 text-sm transition-all duration-300 ${
                                isScrolled
                                  ? 'text-gray-700 hover:bg-[#0A5F3C]/10 hover:text-[#0A5F3C]'
                                  : 'text-white/90 hover:bg-white/20 hover:text-white'
                              }`}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-6 py-3 transition-all duration-300 inline-block
                      ${index === 0 ? 'pl-8' : index === navLinks.length - 1 ? 'pr-8' : ''}
                      ${activeLink === link.name
                        ? isScrolled
                          ? 'bg-[#0A5F3C] text-white'
                          : 'bg-white/20 text-white backdrop-blur-sm'
                        : isScrolled
                          ? 'text-gray-700 hover:bg-[#0A5F3C]/10 hover:text-[#0A5F3C]'
                          : 'text-white/90 hover:bg-white/20 hover:text-white'
                      }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden transition-colors duration-300 z-10 ${isScrolled ? 'text-[#0A5F3C]' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-4" ref={mobileMenuRef}>
          <div className={`rounded-2xl overflow-hidden transition-colors duration-300 ${
            isScrolled ? 'bg-white border border-gray-200 shadow-lg' : 'bg-black/80 backdrop-blur-sm'
          }`}>
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                        className={`w-full flex items-center justify-between px-6 py-4 transition-all duration-300
                          ${activeLink === link.name
                            ? isScrolled
                              ? 'bg-[#0A5F3C] text-white'
                              : 'bg-white/20 text-white backdrop-blur-sm'
                            : isScrolled
                              ? 'text-gray-700 hover:bg-[#0A5F3C]/10 hover:text-[#0A5F3C]'
                              : 'text-white/90 hover:bg-white/20 hover:text-white'
                          }
                          ${navLinks.indexOf(link) !== navLinks.length - 1 ? 'border-b border-gray-200/20' : ''}`}
                      >
                        <span>{link.name}</span>
                        <svg 
                          className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {servicesDropdownOpen && (
                        <div className={`${isScrolled ? 'bg-gray-50' : 'bg-black/60'}`}>
                          {serviceItems.map((service, idx) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              onClick={() => {
                                setActiveLink('Services');
                                setIsOpen(false);
                                setServicesDropdownOpen(false);
                              }}
                              className={`block px-10 py-3 text-sm transition-all duration-300
                                ${isScrolled
                                  ? 'text-gray-700 hover:bg-[#0A5F3C]/10 hover:text-[#0A5F3C]'
                                  : 'text-white/80 hover:bg-white/10 hover:text-white'
                                }
                                ${idx !== serviceItems.length - 1 ? 'border-b border-gray-200/10' : ''}`}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => {
                        setActiveLink(link.name);
                        setIsOpen(false);
                      }}
                      className={`block px-6 py-4 transition-all duration-300
                        ${activeLink === link.name
                          ? isScrolled
                            ? 'bg-[#0A5F3C] text-white'
                            : 'bg-white/20 text-white backdrop-blur-sm'
                          : isScrolled
                            ? 'text-gray-700 hover:bg-[#0A5F3C]/10 hover:text-[#0A5F3C]'
                            : 'text-white/90 hover:bg-white/20 hover:text-white'
                        }
                        ${navLinks.indexOf(link) !== navLinks.length - 1 ? 'border-b border-gray-200/20' : ''}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;