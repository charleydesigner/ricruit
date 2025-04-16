
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="develop-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-develop-600">Develop</span>
              <span className="text-2xl font-bold text-gray-700">.org</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-develop-600 font-medium transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-develop-600 font-medium transition-colors">Services</a>
            <a href="#stories" className="text-gray-700 hover:text-develop-600 font-medium transition-colors">Success Stories</a>
            <a href="#resources" className="text-gray-700 hover:text-develop-600 font-medium transition-colors">Resources</a>
            <a href="#contact" className="text-gray-700 hover:text-develop-600 font-medium transition-colors">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-develop-600 hover:bg-develop-700 text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-develop-600 font-medium transition-colors py-2">Home</a>
              <a href="#services" className="text-gray-700 hover:text-develop-600 font-medium transition-colors py-2">Services</a>
              <a href="#stories" className="text-gray-700 hover:text-develop-600 font-medium transition-colors py-2">Success Stories</a>
              <a href="#resources" className="text-gray-700 hover:text-develop-600 font-medium transition-colors py-2">Resources</a>
              <a href="#contact" className="text-gray-700 hover:text-develop-600 font-medium transition-colors py-2">Contact</a>
              <Button className="bg-develop-600 hover:bg-develop-700 text-white w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
