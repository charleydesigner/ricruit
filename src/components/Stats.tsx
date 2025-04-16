
import { Users, Globe2, Building, Award } from 'lucide-react';

const stats = [
  { 
    icon: <Users className="h-6 w-6 text-develop-500" />,
    number: "10,000+",
    label: "Migrants Supported"
  },
  { 
    icon: <Globe2 className="h-6 w-6 text-develop-500" />,
    number: "75+",
    label: "Countries Connected"
  },
  { 
    icon: <Building className="h-6 w-6 text-develop-500" />,
    number: "450+",
    label: "Partner Employers"
  },
  { 
    icon: <Award className="h-6 w-6 text-develop-500" />,
    number: "92%",
    label: "Placement Success"
  }
];

const Stats = () => {
  return (
    <section className="py-12 bg-develop-600">
      <div className="develop-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-3 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</h3>
              <p className="text-develop-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
