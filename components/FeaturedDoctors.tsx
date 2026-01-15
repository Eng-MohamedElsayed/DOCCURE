
import React from 'react';
import { Star, MapPin, Clock, Calendar, Heart, Share2 } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Michael Brown',
    specialty: 'Psychologist',
    rating: 5.0,
    reviews: 24,
    location: 'Minneapolis, MN',
    time: '30 Min',
    fee: '$650',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
    available: true
  },
  {
    name: 'Dr. Harold Bryant',
    specialty: 'Neurologist',
    rating: 5.0,
    reviews: 18,
    location: 'Winona, MS',
    time: '45 Min',
    fee: '$350',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    available: true
  },
  {
    name: 'Dr. Sandra Jones',
    specialty: 'Cardiologist',
    rating: 5.0,
    reviews: 32,
    location: 'Beckley, WV',
    time: '60 Min',
    fee: '$320',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80',
    available: true
  },
  {
    name: 'Dr. Nicholas Tello',
    specialty: 'Pediatrician',
    rating: 5.0,
    reviews: 21,
    location: 'Ogden, IA',
    time: '45 Min',
    fee: '$250',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
    available: true
  },
];

const FeaturedDoctors: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">Featured Doctors</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            Our <span className="text-blue-600">Highlighted</span> Doctors
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Book appointments with highly qualified and reviewed medical professionals in your area or via telemedicine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-500">
              <div className="relative">
                <img src={doc.image} className="w-full h-64 object-cover" alt={doc.name} />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center">
                   <Star className="w-3 h-3 fill-current mr-1" /> {doc.rating.toFixed(1)}
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur shadow rounded-full text-slate-400 hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                {doc.available && (
                  <div className="absolute bottom-4 left-4 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
                    Available
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs font-bold text-blue-600 mb-1">{doc.specialty}</p>
                    <h3 className="text-lg font-bold text-slate-800">{doc.name}</h3>
                  </div>
                </div>
                
                <div className="space-y-3 mt-4">
                  <div className="flex items-center text-slate-500 text-xs">
                    <MapPin className="w-3 h-3 mr-2 text-blue-400" /> {doc.location} • {doc.time}
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Consultation Fees</p>
                      <p className="text-lg font-bold text-orange-600">{doc.fee}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="p-3 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-all">
                        <Calendar className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-white text-blue-600 border border-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all">
            See All Specialized Doctors
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDoctors;
