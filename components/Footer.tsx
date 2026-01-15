
import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Banner */}
        <div className="bg-blue-600 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 text-white shadow-2xl shadow-blue-600/20">
          <h3 className="text-3xl font-bold max-w-sm">Working For Your Better Health.</h3>
          <div className="flex flex-wrap gap-10">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-4 rounded-2xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-blue-200">Customer Support</p>
                <p className="text-lg font-bold">+1 66589 54598</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-4 rounded-2xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-blue-200">Drop us an Email</p>
                <p className="text-lg font-bold">info@example.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-1">
             <span className="text-2xl font-bold tracking-tight text-blue-600">
              DOC<span className="text-slate-800">CURE</span>
            </span>
            <p className="text-slate-500 text-sm mt-6 leading-relaxed">
              Leading healthcare platform connecting patients with trusted medical professionals worldwide. Your health, our priority.
            </p>
            <div className="flex space-x-4 mt-8">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <button key={i} className="p-2 border border-gray-100 rounded-lg text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50 transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {[
            { title: 'Company', links: ['About', 'Features', 'Works', 'Careers', 'Locations'] },
            { title: 'Treatments', links: ['Dental', 'Cardiac', 'Spinal Cord', 'Hair Growth', 'Anemia & Disorder'] },
            { title: 'Specialties', links: ['Transplant', 'Cardiology', 'Oncology', 'Pediatrics', 'Gynacology'] },
            { title: 'Utilities', links: ['Pricing', 'Contact', 'Request A Quote', 'Premium Membership', 'Integrations'] },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="text-slate-900 font-bold mb-8 uppercase text-[10px] tracking-widest">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm">Copyright © 2025. All Rights Reserved, Doccure</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-slate-900 text-sm">Legal Notice</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 text-sm">Refund Policy</a>
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" alt="Payment" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
