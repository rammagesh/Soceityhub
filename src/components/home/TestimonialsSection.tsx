import React from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Resident, Green Valley Apartments',
      content: 'SocietyHub has made visitor management so much easier. No more waiting at the gate or missed deliveries!',
      avatar: '/images/avatar1.png'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Society Secretary, Palm Heights',
      content: 'Managing maintenance requests and payments has never been this simple. Highly recommend to all societies.',
      avatar: '/images/avatar1.png'
    },
    {
      name: 'Anita Patel',
      role: 'Resident, Sunrise Towers',
      content: 'The community features help us stay connected with neighbors. Great platform for modern society living.',
      avatar: '/images/avatar1.png'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-heading2 font-bold text-charcoal mb-4">
            What Our Community Says
          </h2>
          <p className="text-para-lg text-coolgray">
            Join thousands of satisfied residents and society administrators
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  width={48} 
                  height={48} 
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="text-heading6 font-bold text-charcoal">{testimonial.name}</h4>
                  <p className="text-small text-coolgray">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-para text-coolgray italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;