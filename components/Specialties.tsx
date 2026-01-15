
import React from 'react';
import { Heart, Activity, Brain, Baby, ShieldAlert, Thermometer, ChevronLeft, ChevronRight } from 'lucide-react';

const specialtyList = [
  { name: 'Cardiology', count: 254, icon: Heart, color: 'text-red-500', bg: 'bg-red-50' },
  { name: 'Orthopedics', count: 151, icon: Activity, color: 'text-blue-500', bg: 'bg-blue-50' },
  { name: 'Neurology', count: 176, icon: Brain, color: 'text-purple-500', bg: 'bg-purple-50' },
  { name: 'Pediatrics', count: 124, icon: Baby, color: 'text-cyan-500', bg: 'bg-cyan-50' },
  { name: 'Psychiatry', count: 112, icon: ShieldAlert, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { name: 'Endocrinology', count: 104, icon: Thermometer, color: 'text-orange-500', bg: 'bg-orange-50' },
];

const Specialties: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div>
            <span className="bg-blue-100 text-blue-600 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">Top Specialties</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">
              Highlighting the <span className="text-blue-600">Care & Support</span>
            </h2>
          </div>
          <div className="flex space-x-3">
            <button className="p-3 border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-all">
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button className="p-3 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {specialtyList.map((spec, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-300 flex flex-col items-center">
              <div className={`w-20 h-20 ${spec.bg} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <spec.icon className={`w-10 h-10 ${spec.color}`} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">{spec.name}</h3>
              <p className="text-sm font-medium text-slate-400">{spec.count} Doctors</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
