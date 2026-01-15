
import React from 'react';
import { Search, MapPin, ChevronDown, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden gradient-blue">
      {/* Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="10" cy="10" r="20" fill="white" />
          <circle cx="90" cy="80" r="30" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Area */}
          <div className="text-white space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="flex -space-x-2 mr-3">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i+10}/40/40`} className="w-8 h-8 rounded-full border-2 border-blue-600" alt="User" />
                ))}
              </div>
              <span className="text-sm font-medium">5K+ Appointments this week</span>
              <div className="ml-3 flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Discover Health: Find Your <br />
              <span className="text-blue-100">Trusted Doctors</span> Today
            </h1>
            
            <p className="text-lg text-blue-50 opacity-90 max-w-lg leading-relaxed">
              Skip the waiting room. Connect with the best specialists and book instant video or in-person consultations with ease.
            </p>

            {/* Search Component */}
            <div className="bg-white p-2 md:p-3 rounded-2xl shadow-2xl max-w-2xl flex flex-col md:flex-row items-center gap-2">
              <div className="flex-1 w-full relative group">
                <div className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Search className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Specialty</p>
                    <p className="text-sm font-semibold text-slate-800 flex items-center">
                      Select Specialty <ChevronDown className="w-4 h-4 ml-1 text-slate-400" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block w-px h-10 bg-gray-200"></div>

              <div className="flex-1 w-full">
                <div className="flex items-center px-4 py-3 group">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Search</p>
                    <input 
                      type="text" 
                      placeholder="Medical Procedures, hospitals..." 
                      className="text-sm font-semibold text-slate-800 w-full focus:outline-none placeholder:text-slate-400 bg-transparent"
                    />
                  </div>
                </div>
              </div>

              <button className="w-full md:w-auto px-10 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all">
                Search
              </button>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="hidden lg:block relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80" 
                className="rounded-[40px] shadow-2xl border-8 border-white/20" 
                alt="Doctor smiling" 
              />
              {/* Floating elements */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl animate-bounce-slow">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Star className="w-6 h-6 text-green-600 fill-current" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">100% Reliable</p>
                    <p className="text-xs text-slate-500">Verified Professional Doctors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
