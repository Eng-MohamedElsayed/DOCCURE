
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const posts = [
  {
    date: '15 May',
    category: 'Treatments',
    title: 'Understanding and Preventing Glaucoma',
    image: 'https://picsum.photos/seed/med1/400/250',
    desc: 'Glaucoma is a leading cause of blind worldwide, yet early detection can...'
  },
  {
    date: '18 May',
    category: 'Neurology',
    title: 'Neurology & Technology: A New Frontier',
    image: 'https://picsum.photos/seed/med2/400/250',
    desc: 'Discover the intersection of health and technology, transforming...'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">Recent Blogs</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">
            Stay Updated With Our <span className="text-blue-600">Latest Articles</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
              <div className="relative">
                <img src={post.image} className="w-full h-56 object-cover" alt={post.title} />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-xl text-center shadow-lg">
                  <p className="text-lg font-bold text-blue-600 leading-none">{post.date.split(' ')[0]}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">{post.date.split(' ')[1]}</p>
                </div>
              </div>
              <div className="p-8">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{post.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{post.desc}</p>
                <button className="flex items-center text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
