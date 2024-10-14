import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">ADP Engineering Society</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
          <Link to="/events" className="hover:text-blue-200">Events</Link>
          <Link to="/team" className="hover:text-blue-200">Team</Link>
          <Link to="/join-us" className="hover:text-blue-200">Join Us</Link>
          <Link to="/sponsors" className="hover:text-blue-200">Sponsors</Link>
          <Link to="/contact" className="hover:text-blue-200">Contact</Link>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-500 px-4 py-2">
          <Link to="/" className="block py-2" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block py-2" onClick={toggleMenu}>About</Link>
          <Link to="/events" className="block py-2" onClick={toggleMenu}>Events</Link>
          <Link to="/team" className="block py-2" onClick={toggleMenu}>Team</Link>
          <Link to="/join-us" className="block py-2" onClick={toggleMenu}>Join Us</Link>
          <Link to="/sponsors" className="block py-2" onClick={toggleMenu}>Sponsors</Link>
          <Link to="/contact" className="block py-2" onClick={toggleMenu}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;