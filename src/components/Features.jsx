// src/components/Features.jsx
import { FiUsers, FiCalendar, FiAward } from 'react-icons/fi';

export default function Features() {
  const stats = [
    {
      number: "250+",
      label: "Championships Organized",
      description: "Successfully managed competitions across multiple locations"
    },
    {
      number: "3,000+",
      label: "Athletes Empowered",
      description: "Supporting athletes in their journey to excellence"
    },
    {
      number: "100,000+",
      label: "Events Logged",
      description: "Comprehensive tracking of all competition activities"
    }
  ];

  const features = [
    {
      icon: <FiUsers className="w-8 h-8 text-white" />,
      title: "Streamlined Athlete Enrollment",
      description: "Our platform allows over 10 thousand+ championships to be organized seamlessly, giving you complete control."
    },
    {
      icon: <FiCalendar className="w-8 h-8 text-white" />,
      title: "Dynamic Event & Result Tracking",
      description: "Track and manage every aspect of your championships in real-time, ensuring accurate results."
    },
    {
      icon: <FiAward className="w-8 h-8 text-white" />,
      title: "Comprehensive Panel Creation",
      description: "Create and manage judge panels efficiently, ensuring fair and transparent scoring."
    }
  ];

  return (
    <>
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-4xl font-bold mb-2 animate-fade-in">{stat.number}</h3>
                <h4 className="text-xl font-semibold mb-2 animate-fade-in-delay">{stat.label}</h4>
                <p className="text-gray-600 animate-fade-in-delay-2">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Why Choose Us Section */}
          <div className="bg-indigo-600 text-white rounded-2xl p-12 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-center mb-4 animate-fade-in">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 animate-fade-in-delay">{feature.title}</h3>
                  <p className="text-indigo-100 animate-fade-in-delay-2">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}