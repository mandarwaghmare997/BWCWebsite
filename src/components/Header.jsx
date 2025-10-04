import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.webp';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Bellwether Capital | Valuing Tomorrow" className="h-10 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/aboutus" 
              className={`text-white hover:text-green transition-colors duration-300 ${
                isActive('/aboutus') ? 'text-green' : ''
              }`}
            >
              About Us
            </Link>
            <a 
              href="#contact" 
              className="text-white hover:text-orange transition-colors duration-300"
            >
              Contact
            </a>
            <a 
              href="https://app.bellwethercapital.in/wealthspectrum/app/loginWith"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-navy transition-all duration-300"
            >
              Client Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
