
import React from 'react';
import { Search, UserCheck, CalendarCheck, CheckCircle2 } from 'lucide-react';

const steps = [
  { id: '01', title: 'Search For Doctors', icon: Search, desc: 'Search for a doctor easily based on specialization, location, or real time availability' },
  { id: '02', title: 'Check Doctor Profile', icon: UserCheck, desc: 'Explore detailed doctor profiles on our platform to make informed healthcare decisions.' },
  { id: '03', title: 'Schedule Appointment', icon: CalendarCheck, desc: 'After choose your preferred doctor, select a time slot, & confirm your appointment.' },
  { id: '04', title: 'Get Your Solution', icon: CheckCircle2, desc: 'Discuss your health concerns with the doctor and receive the personalized solution.' },
];

const ProcessSteps: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group flex flex-col items-center text-center">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-slate-100 group-hover:bg-blue-100 transition-colors">
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 border-2 border-slate-200 bg-white rounded-full group-hover:border-blue-400 transition-all"></div>
                </div>
              )}
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-600/20 mb-8 transform group-hover:-rotate-12 transition-transform duration-500">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              <span className="text-6xl font-black text-slate-50 mt-4 select-none group-hover:text-blue-50 transition-colors">{step.id}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
