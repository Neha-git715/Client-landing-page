// src/components/CTA.jsx
import { FiCheck } from 'react-icons/fi';

export default function CTA() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "Per Month",
      description: "Perfect for small to medium-sized project management",
      features: [
        "Full Project Management",
        "Basic Collaboration",
        "Basic Analytics",
        "Email Support"
      ]
    },
    {
      name: "Pro",
      price: "$199",
      period: "Per Month",
      description: "Professional-grade tools with growing business",
      features: [
        "Everything in Starter",
        "Advanced Collaboration",
        "Advanced Analytics",
        "Priority Support",
        "Mobile Accessibility"
      ]
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "Per Month",
      description: "Complete solution for large scale businesses",
      features: [
        "Everything in Pro",
        "Enterprise Collaboration",
        "Custom Analytics",
        "24/7 Support",
        "Mobile Accessibility",
        "Custom Integration"
      ]
    }
  ];

  return (
    <>
      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">Flexible Pricing, Unbeatable Value</h2>
            <p className="text-gray-600 animate-fade-in-delay">Choose the plan that best suits your needs. All plans include core features.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className="border rounded-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-delay-2"
              >
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FiCheck className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 px-4 rounded-lg text-indigo-600 hover:bg-indigo-50 transition-all duration-300 border border-indigo-600 hover:shadow-md">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="about" className="bg-indigo-600 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">
            Experience the Impact of Our Software in<br />your Next Yogasana Championship.
          </h2>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 animate-fade-in-delay">
            Get Started Free
          </button>
        </div>
      </section>
    </>
  );
}