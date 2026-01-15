
import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Deny Hendrawan',
    location: 'United States',
    rating: 5,
    text: 'I had a wonderful experience the staff was friendly and attentive, and Dr. Smith took the time to explain everything clearly.',
    image: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    name: 'Johnson DWayne',
    location: 'United Kingdom',
    rating: 5,
    text: 'Genuinely cares about his patients. He helped me understand my condition and worked with me to create a plan that fit my lifestyle.',
    image: 'https://picsum.photos/seed/user2/100/100',
    highlight: true
  },
  {
    name: 'Rayan Smith',
    location: 'United States',
    rating: 5,
    text: 'I had a great experience with Dr. Chen. She was not only professional but also made me feel comfortable discussing my concerns.',
    image: 'https://picsum.photos/seed/user3/100/100'
  }
];

const stats = [
  { label: 'Doctors Available', value: '500+' },
  { label: 'Specialties', value: '18+' },
  { label: 'Bookings Done', value: '30K' },
  { label: 'Hospitals & Clinic', value: '97+' },
  { label: 'Lab Tests Available', value: '317+' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">Testimonials</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">
            15k Users <span className="text-blue-600">Trust Doccure</span> Worldwide
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className={`p-10 rounded-[2.5rem] border ${review.highlight ? 'bg-blue-600 text-white border-blue-600 shadow-2xl' : 'bg-white text-slate-900 border-gray-100'} relative`}>
              <Quote className={`absolute top-8 right-8 w-10 h-10 ${review.highlight ? 'text-white/20' : 'text-blue-100'}`} />
              <div className="flex text-yellow-400 mb-6">
                {[...Array(review.rating)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
              </div>
              <h4 className="text-xl font-bold mb-4">{review.highlight ? 'Good Hospitality' : 'Nice Treatment'}</h4>
              <p className={`text-sm leading-relaxed mb-8 ${review.highlight ? 'text-blue-50' : 'text-slate-500'}`}>
                {review.text}
              </p>
              <div className="flex items-center space-x-4">
                <img src={review.image} className="w-12 h-12 rounded-full border-2 border-white/20" alt={review.name} />
                <div>
                  <h5 className="font-bold text-sm">{review.name}</h5>
                  <p className={`text-[10px] font-bold ${review.highlight ? 'text-blue-200' : 'text-slate-400'}`}>{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-blue-100 pt-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-extrabold text-slate-900 mb-2">{stat.value}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
