
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="develop-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Empowering <span className="gradient-text">Migrants</span> to Build a Better Future
            </h1>
            <p className="text-lg text-gray-600">
              We connect migrant workers with ethical job opportunities and provide resources for a successful transition. 
              Our mission is to support dignified labor migration that benefits individuals, families, and communities.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Button className="bg-develop-600 hover:bg-develop-700 text-white font-medium px-6 py-6 flex items-center">
                Find Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-develop-600 text-develop-600 hover:bg-develop-50 font-medium px-6 py-6">
                Discover Resources
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">JD</div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">KS</div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">AM</div>
              </div>
              <p className="text-sm text-gray-600">Joined by <span className="font-semibold">10,000+</span> individuals across <span className="font-semibold">75+ countries</span></p>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-develop-500 rounded-full blur-[64px] opacity-10"></div>
            <img 
              src="/placeholder.svg" 
              alt="Global migrants working together" 
              className="w-full h-auto rounded-xl shadow-lg relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
