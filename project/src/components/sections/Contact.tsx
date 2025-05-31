import React, { useRef, useState, FormEvent } from 'react';
import { gsap } from 'gsap';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Animation for label
    const label = e.target.previousElementSibling;
    if (label && label.tagName === 'LABEL') {
      if (value) {
        gsap.to(label, { y: -20, scale: 0.8, color: '#00FFFF', duration: 0.3 });
      } else {
        gsap.to(label, { y: 0, scale: 1, color: '#9CA3AF', duration: 0.3 });
      }
    }
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({ name: '', email: '', message: '' });
    
    // Reset label animations
    if (formRef.current) {
      const labels = formRef.current.querySelectorAll('label');
      labels.forEach((label) => {
        gsap.to(label, { y: 0, scale: 1, color: '#9CA3AF', duration: 0.3 });
      });
    }
  };
  
  return (
    <section id="contact" ref={sectionRef} className="section relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="text-accent-green glow-text">Get In</span> Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <Card className="h-full">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center mr-4">
                    <Mail size={18} className="text-accent-cyan" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Email</h4>
                    <p className="text-gray-400">contact@johndoe.dev</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center mr-4">
                    <Phone size={18} className="text-accent-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Phone</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center mr-4">
                    <MapPin size={18} className="text-accent-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Location</h4>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div>
            <Card glowColor="blue">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
              {formStatus.submitted && formStatus.success ? (
                <div className="bg-dark-200 p-4 rounded-lg border border-accent-green text-center">
                  <p className="text-accent-green">{formStatus.message}</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <label 
                      htmlFor="name" 
                      className="absolute left-3 top-3 text-gray-400 transition-all duration-300"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-200 border border-gray-700 rounded-lg px-3 pt-6 pb-2 focus:outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>
                  
                  <div className="relative">
                    <label 
                      htmlFor="email" 
                      className="absolute left-3 top-3 text-gray-400 transition-all duration-300"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-200 border border-gray-700 rounded-lg px-3 pt-6 pb-2 focus:outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>
                  
                  <div className="relative">
                    <label 
                      htmlFor="message" 
                      className="absolute left-3 top-3 text-gray-400 transition-all duration-300"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-dark-200 border border-gray-700 rounded-lg px-3 pt-6 pb-2 focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                    />
                  </div>
                  
                  <Button type="submit" glowColor="blue">
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;