import React from 'react';
import Image from 'next/image';

const ContactForm = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-heading2 font-bold text-charcoal mb-6">
              Let's Start a Conversation
            </h2>
            <p className="text-para-lg text-coolgray mb-8">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center mr-4">
                  <Image src="/icons/phone.svg" alt="Phone" width={24} height={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">Phone</h4>
                  <p className="text-coolgray">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center mr-4">
                  <Image src="/icons/chat-icon.svg" alt="Email" width={24} height={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">Email</h4>
                  <p className="text-coolgray">hello@societyhub.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-small font-semibold text-charcoal mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald focus:outline-none text-charcoal"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-small font-semibold text-charcoal mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald focus:outline-none text-charcoal"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-small font-semibold text-charcoal mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald focus:outline-none text-charcoal"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-small font-semibold text-charcoal mb-2">Society Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald focus:outline-none text-charcoal"
                  placeholder="Green Valley Apartments"
                />
              </div>
              
              <div>
                <label className="block text-small font-semibold text-charcoal mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald focus:outline-none text-charcoal"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;