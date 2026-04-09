import React from 'react';
import { motion } from 'framer-motion';

const BrandInfo = () => {
  return (
    <section className="py-24 bg-softBg border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-accent font-medium tracking-[0.5em] uppercase mb-8 block">
            The Legacy of Brilliance
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary-dark mb-10 leading-snug">
            Crafting Emotions Into <br /> 
            <span className="italic">Timeless Masterpieces</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-10" />
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light tracking-wide">
            For over three decades, BrandName has been the cornerstone of luxury imitation jewellery. 
            We blend traditional craftsmanship with contemporary design to create pieces that resonate 
            with the modern woman. Whether it's for a grand wedding or a subtle statement, 
            our collections are meticulously curated to ensure you shine in every moment.
          </p>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Founded', value: '1992' },
              { label: 'Handcrafted', value: '100%' },
              { label: 'Unique Designs', value: '5k+' },
              { label: 'Happy Brides', value: '50k+' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-serif text-primary font-bold mb-1">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandInfo;
