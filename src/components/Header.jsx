import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md py-3' : 'py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer"
               onClick={() => scrollToSection('hero')}>
            YoGo
          </div>
          
          <nav className="hidden md:flex gap-8">
            {['features', 'services', 'about', 'pricing'].map((item) => (
              <a
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize hover:text-indigo-600 transition-colors cursor-pointer"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:block text-indigo-600 hover:text-indigo-700 transition-colors">
              Get Started Free
            </button>
            <button 
              className="md:hidden text-gray-600 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col gap-4 pb-6">
            {['features', 'services', 'about', 'pricing'].map((item) => (
              <a
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize hover:text-indigo-600 transition-colors cursor-pointer"
              >
                {item}
              </a>
            ))}
            <button className="text-indigo-600 hover:text-indigo-700 transition-colors text-left">
              Get Started Free
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}