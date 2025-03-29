
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="text-xl font-bold">Wirtualny Alkomat ONLINE</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              className="text-white hover:bg-purple-700 hover:text-white"
              onClick={toggleMenu}
            >
              Menu
              {isOpen ? <X size={16} className="ml-1" /> : <Menu size={16} className="ml-1" />}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 rounded hover:bg-purple-700 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile & Desktop Menu Content */}
        {isOpen && (
          <div className="py-3 pb-5 border-t border-purple-700">
            <ul className="space-y-2 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
              <li><Link to="/" className="block py-2" onClick={toggleMenu}>Strona główna</Link></li>
              <li><Link to="/blokada-alkoholowa" className="block py-2" onClick={toggleMenu}>Blokada alkoholowa</Link></li>
              <li><Link to="/dobrowolne-poddanie-karze" className="block py-2" onClick={toggleMenu}>Dobrowolne poddanie się karze</Link></li>
              <li><Link to="/odzyskanie-prawa-jazdy" className="block py-2" onClick={toggleMenu}>Odzyskanie prawa jazdy</Link></li>
              <li><Link to="/warunkowe-umorzenie" className="block py-2" onClick={toggleMenu}>Warunkowe umorzenie</Link></li>
              <li><Link to="/alkohol-na-swiecie" className="block py-2" onClick={toggleMenu}>Alkohol na świecie</Link></li>
              <li><Link to="/artykul-178a" className="block py-2" onClick={toggleMenu}>Artykuł 178a KK</Link></li>
              <li><Link to="/wypadek-po-alkoholu" className="block py-2" onClick={toggleMenu}>Wypadek po alkoholu</Link></li>
              <li><Link to="/badanie-alkomatem" className="block py-2" onClick={toggleMenu}>Badanie alkomatem</Link></li>
              <li><Link to="/kontrola-policji" className="block py-2" onClick={toggleMenu}>Kontrola policji</Link></li>
              <li><Link to="/adwokat-jazda-po-alkoholu" className="block py-2" onClick={toggleMenu}>Adwokat - jazda po alkoholu</Link></li>
              <li><Link to="/kontakt" className="block py-2" onClick={toggleMenu}>Kontakt</Link></li>
              <li><Link to="/polityka-prywatnosci" className="block py-2" onClick={toggleMenu}>Polityka prywatności</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
