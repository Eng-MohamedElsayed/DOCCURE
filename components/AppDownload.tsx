
import React from 'react';
import { Smartphone, Apple, Play } from 'lucide-react';

const AppDownload: React.FC = () => {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-white space-y-8">
            <p className="text-sm font-bold text-blue-200 tracking-widest uppercase">Working For Your Better Health.</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Download the Doccure <br /> App today!
            </h2>
            <p className="text-blue-50 text-lg opacity-80 leading-relaxed">
              Experience healthcare on the go. Book appointments, chat with doctors, and access your medical records from anywhere in the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center space-x-3 bg-white text-slate-900 px-8 py-4 rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Apple className="w-6 h-6 fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-slate-400 leading-none">Download on</p>
                  <p className="text-lg font-bold leading-tight">App Store</p>
                </div>
              </button>
              <button className="flex items-center space-x-3 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-xl hover:-translate-y-1 transition-all border border-white/10">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Play className="w-6 h-6 fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-blue-200/50 leading-none">Get it on</p>
                  <p className="text-lg font-bold leading-tight">Google Play</p>
                </div>
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 flex justify-center lg:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1556656793-062ff9878273?auto=format&fit=crop&w=400&q=80" 
                className="w-72 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-8 border-slate-900 transform rotate-6 lg:rotate-12 transition-transform hover:rotate-0 duration-500" 
                alt="App Interface" 
              />
              <img 
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=400&q=80" 
                className="w-64 rounded-[3rem] shadow-2xl border-8 border-slate-900 absolute -bottom-10 -left-10 lg:left-0 transform -rotate-6 hidden md:block" 
                alt="App Interface 2" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
