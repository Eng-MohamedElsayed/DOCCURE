
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How do I book an appointment with a doctor?",
    answer: "Booking an appointment is simple: use our search tool to find a doctor, view their profile, select an available time slot that fits your schedule, and confirm your booking. You'll receive instant confirmation via email and SMS."
  },
  {
    question: "Can I request a specific doctor when booking my appointment?",
    answer: "Yes, you can search for doctors by name, specialty, or hospital affiliation. Our platform gives you full control over which professional you choose to see."
  },
  {
    question: "What should I do if I need to cancel or reschedule my appointment?",
    answer: "You can cancel or reschedule through your patient dashboard up to 24 hours before the appointment without any charges. If you need to cancel last minute, please contact the clinic directly."
  },
  {
    question: "What if I'm running late for my appointment?",
    answer: "If you're running late, we recommend calling the clinic or using our in-app chat to notify the doctor. Most doctors offer a 15-minute grace period before needing to reschedule."
  },
  {
    question: "Can I book appointments for family members or dependents?",
    answer: "Absolutely. You can add family members to your account as dependents and book appointments on their behalf, maintaining a central history of your family's health."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">FAQ's</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">
            Your Questions are <span className="text-blue-600">Answered</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden hover:border-blue-100 transition-colors">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <span className={`text-sm font-bold transition-colors ${openIndex === idx ? 'text-blue-600' : 'text-slate-700'}`}>
                  {faq.question}
                </span>
                <div className={`p-1 rounded-full ${openIndex === idx ? 'bg-blue-600 text-white' : 'bg-gray-50 text-slate-400 group-hover:text-blue-600'}`}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                  <p className="text-slate-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
