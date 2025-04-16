
import { Briefcase, GraduationCap, Home, Globe, HeartHandshake, FileText } from 'lucide-react';

const serviceItems = [
  {
    icon: <Briefcase className="h-8 w-8 text-develop-500" />,
    title: "Job Matching",
    description: "Connect with ethical employers in need of your skills across borders."
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-develop-500" />,
    title: "Skills Training",
    description: "Access specialized training to enhance your qualifications and earning potential."
  },
  {
    icon: <Home className="h-8 w-8 text-develop-500" />,
    title: "Housing Support",
    description: "Find safe and affordable housing options in your destination country."
  },
  {
    icon: <Globe className="h-8 w-8 text-develop-500" />,
    title: "Visa Guidance",
    description: "Navigate complex visa processes with expert assistance and resources."
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-develop-500" />,
    title: "Community Building",
    description: "Connect with other migrants and locals to build your support network."
  },
  {
    icon: <FileText className="h-8 w-8 text-develop-500" />,
    title: "Legal Resources",
    description: "Access information about your rights and legal protections as a migrant worker."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="develop-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services for <span className="gradient-text">Migrants</span>
          </h2>
          <p className="text-gray-600">
            We provide comprehensive support for your migration journey, from finding work to settling in your new community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover-scale border border-gray-100">
              <div className="bg-develop-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
