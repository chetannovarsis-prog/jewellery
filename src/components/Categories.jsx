import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Pendant Sets', image: '/images/pendantset.png' },
  { name: 'Nath', image: '/images/nath.png' }, // Alternative Nath ID
  { name: 'Bangles', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600' },
  { name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600' },
  { name: 'Anklets', image: '/images/Anklets.png' },
];

const Categories = () => {
  return (
    <section className="py-24 bg-softBg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-primary-dark mb-4"
          >
            Shop by Category
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-accent mx-auto"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="mt-6 overflow-hidden h-8 flex items-center">
                <motion.p
                  className="text-gray-800 font-medium tracking-wide"
                  initial={{ y: 0 }}
                  whileHover={{ y: -5 }}
                >
                  {cat.name}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
