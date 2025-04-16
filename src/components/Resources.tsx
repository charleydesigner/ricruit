
import { ArrowRight, FileText, Video, Book, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const resources = [
  {
    title: "Migration Guide 2025",
    type: "PDF Guide",
    icon: <FileText className="h-6 w-6" />,
    description: "Comprehensive guide to labor migration with country-specific information",
    link: "#"
  },
  {
    title: "Understanding Work Visas",
    type: "Video Series",
    icon: <Video className="h-6 w-6" />,
    description: "Expert explanations of different visa categories and application processes",
    link: "#"
  },
  {
    title: "Language Learning Resources",
    type: "Online Course",
    icon: <Book className="h-6 w-6" />,
    description: "Free language courses in 12 languages to prepare for your new home",
    link: "#"
  },
  {
    title: "Worker Rights Toolkit",
    type: "Downloadable Kit",
    icon: <Download className="h-6 w-6" />,
    description: "Know your rights as a migrant worker with country-specific legal information",
    link: "#"
  }
];

const Resources = () => {
  return (
    <section id="resources" className="section-padding bg-white">
      <div className="develop-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Free Resources for <span className="gradient-text">Migrant Workers</span>
          </h2>
          <p className="text-gray-600">
            Access tools, guides and information to help you at every stage of your migration journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow flex">
              <div className="mr-5 bg-develop-50 rounded-lg h-14 w-14 flex items-center justify-center text-develop-600 shrink-0">
                {resource.icon}
              </div>
              <div>
                <div className="text-xs text-develop-600 font-medium uppercase tracking-wider mb-1">{resource.type}</div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-3">{resource.description}</p>
                <a href={resource.link} className="text-develop-600 font-medium inline-flex items-center hover:text-develop-800">
                  Access Resource <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-develop-600 text-develop-600 hover:bg-develop-50">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
