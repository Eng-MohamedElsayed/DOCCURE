
import React from 'react';
import { ShieldCheck, UserCheck, CalendarDays, Play } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">Why Book With Us</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">
            Compelling <span className="text-blue-600">Reasons</span> to Choose
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { title: 'Follow-Up Care', icon: ShieldCheck, color: 'bg-orange-100 text-orange-600', text: 'We ensure continuity of care through regular follow-ups, and timely reminders, keeping you supported at every stage.' },
            { title: 'Patient Centered Approach', icon: UserCheck, color: 'bg-blue-100 text-blue-600', text: 'We prioritize your comfort and preferences, tailoring our services to meet your individual needs and care from our experts.' },
            { title: 'Convenient Access', icon: CalendarDays, color: 'bg-cyan-100 text-cyan-600', text: 'Easily book appointments online or through our dedicated customer service team, with flexible hours to fit your schedule.' }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] border border-gray-100 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all group">
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* About Section Combined */}
        <div className="mt-24 bg-slate-900 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/doc1/400/400" className="rounded-2xl" alt="Doc" />
              <img src="https://picsum.photos/seed/doc2/400/400" className="rounded-2xl mt-8" alt="Doc" />
              <img src="https://picsum.photos/seed/doc3/400/400" className="rounded-2xl -mt-8" alt="Doc" />
              <img src="https://picsum.photos/seed/doc4/400/400" className="rounded-2xl" alt="Doc" />
            </div>
            <button className="absolute inset-0 flex items-center justify-center group">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform ring-4 ring-blue-600/20">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </button>
          </div>
          <div className="flex-1 space-y-8">
            <span className="bg-blue-600/20 text-blue-400 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-500/20">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              We are committed to understanding your <span className="text-blue-500">unique needs</span> and delivering care.
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              As a trusted health & a trusted healthcare provider in our community, we are passionate about promoting health and wellness beyond the clinic.
            </p>
            
            <div className="space-y-4">
              <div className="bg-blue-600/5 border border-white/5 p-6 rounded-2xl">
                <h4 className="text-blue-500 font-bold mb-2">Our Vision</h4>
                <p className="text-slate-400 text-sm">We envision a community where everyone has access to high-quality healthcare and the resources they need to lead healthy, fulfilling lives.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl">
                <h4 className="text-white font-bold mb-2">Our Mission</h4>
                <p className="text-slate-400 text-sm">To provide patient-centered care that is accessible, equitable, and of the highest quality for all members of our community.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
