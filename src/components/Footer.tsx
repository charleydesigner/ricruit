
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="develop-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">Develop</span>
              <span className="text-2xl font-bold text-develop-400">.org</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Supporting ethical labor migration through resources, connections, and community. 
              Our mission is to empower migrants to build better futures.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Develop.org. All rights reserved.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Job Matching</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Skills Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Housing Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Visa Guidance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Legal Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Impact Reports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="develop-container flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 mb-4 md:mb-0">
            Supporting migrants across borders since 2023
          </p>
          <p className="flex items-center text-gray-500">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for migrant communities worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
