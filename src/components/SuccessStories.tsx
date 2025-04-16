
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stories = [
  {
    name: "Maria Rodríguez",
    origin: "Colombia",
    destination: "Spain",
    image: "/placeholder.svg",
    quote: "Thanks to Develop.org, I found a job as a healthcare assistant that matched my skills. The visa guidance made the process much smoother than I expected."
  },
  {
    name: "Ahmed Hassan",
    origin: "Egypt",
    destination: "Germany",
    image: "/placeholder.svg",
    quote: "The skills training program helped me qualify for a position in engineering that transformed my career opportunities and my family's future."
  },
  {
    name: "Priya Sharma",
    origin: "India",
    destination: "Canada",
    image: "/placeholder.svg",
    quote: "Finding community support through Develop.org made all the difference in my transition. I now have both a great job and a network of friends."
  }
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === stories.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stories.length - 1 : prevIndex - 1));
  };

  return (
    <section id="stories" className="section-padding bg-gray-50">
      <div className="develop-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600">
            Real people, real journeys, real impact. See how our support has helped migrants thrive in their new homes.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gray-200">
                <img 
                  src={stories[currentIndex].image}
                  alt={stories[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6 md:p-10 flex flex-col justify-center">
                <Quote className="h-12 w-12 text-develop-200 mb-4" />
                <p className="text-lg text-gray-700 italic mb-6">
                  "{stories[currentIndex].quote}"
                </p>
                <div>
                  <p className="font-semibold text-lg">{stories[currentIndex].name}</p>
                  <p className="text-sm text-gray-500">
                    {stories[currentIndex].origin} to {stories[currentIndex].destination}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            
            {stories.map((_, index) => (
              <Button 
                key={index}
                variant="ghost" 
                size="icon"
                className={`w-2 h-2 rounded-full p-0 ${
                  currentIndex === index ? 'bg-develop-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
