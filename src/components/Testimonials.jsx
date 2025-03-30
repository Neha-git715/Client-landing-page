// src/components/Testimonials.jsx
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "I had a fantastic experience using their software. The app is easy to navigate, and the customer service is outstanding. I highly recommend!",
      author: "Mehrad Tarani",
      role: "Ex-Founder at Yoga Icons",
      image: "/testimonial-1.svg"
    },
    {
      rating: 5,
      text: "I had a fantastic experience using their software. The app is easy to navigate, and the customer service is outstanding. I highly recommend!",
      author: "Mehrad Tarani",
      role: "Ex-Founder at Yoga Icons",
      image: "/testimonial-2.svg"
    },
    {
      rating: 5,
      text: "I had a fantastic experience using their software. The app is easy to navigate, and the customer service is outstanding. I highly recommend!",
      author: "Mehrad Tarani",
      role: "Ex-Founder at Yoga Icons",
      image: "/testimonial-3.svg"
    },
    {
      rating: 5,
      text: "I had a fantastic experience using their software. The app is easy to navigate, and the customer service is outstanding. I highly recommend!",
      author: "Mehrad Tarani",
      role: "Ex-Founder at Yoga Icons",
      image: "/testimonial-4.svg"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">What Yogasana lovers say using</h2>
        <p className="text-xl text-center mb-12 text-gray-600">our Software</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}