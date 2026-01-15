
import React from 'react';
import { Activity, ShieldPlus, Heart, Zap, Waves, Cross } from 'lucide-react';

const partners = [
  { name: 'NovaCare', icon: Activity },
  { name: 'Apex Health', icon: ShieldPlus },
  { name: 'PrimeLife', icon: Heart },
  { name: 'ClearSound', icon: Zap },
  { name: 'Airway', icon: Waves },
  { name: 'Cureplus', icon: Cross },
];

const Partners: React.FC = () => {
  return (
    <section className="py-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <p className="text-center text-slate-500 text-[10px] uppercase font-bold tracking-[0.3em] mb-10">Trusted Partners with Doccure</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
          {partners.map((p, i) => (
            <div key={i} className="flex items-center space-x-2 text-white hover:opacity-100 transition-opacity">
              <p.icon className="w-5 h-5 text-blue-500" />
              <span className="font-bold text-lg tracking-tight">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
