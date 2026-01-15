
import React from 'react';
import { Calendar, PhoneCall, Building2, HeartPulse, Pill, FlaskConical, Home } from 'lucide-react';

const services = [
  { label: 'Book Appointment', icon: Calendar, color: 'bg-cyan-500' },
  { label: 'Talk to Doctors', icon: PhoneCall, color: 'bg-blue-600' },
  { label: 'Hospitals & Clinics', icon: Building2, color: 'bg-pink-500' },
  { label: 'Healthcare', icon: HeartPulse, color: 'bg-teal-500' },
  { label: 'Medicine & Supplies', icon: Pill, color: 'bg-purple-600' },
  { label: 'Lab Testing', icon: FlaskConical, color: 'bg-orange-500' },
  { label: 'Home Care', icon: Home, color: 'bg-emerald-500' },
];

const QuickLinks: React.FC = () => {
  return (
    <div className="relative -mt-10 md:-mt-16 z-20 max-w-7xl mx-auto px-4">
      <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-6 md:p-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className={`w-14 h-14 ${service.color} text-white rounded-2xl flex items-center justify-center mb-3 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300`}>
                <service.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-600 text-center leading-tight transition-colors group-hover:text-blue-600">
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
