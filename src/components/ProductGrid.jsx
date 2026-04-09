import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: 'Temple Collection', image: '/images/1.png', category: 'Necklace' },
  { id: 2, name: 'Kundan Heritage', image: '/images/2.png', category: 'Sets' },
  { id: 3, name: 'Vintage Gold', image: '/images/3.png', category: 'Bangle' },
  { id: 4, name: 'Royal Polki', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600', category: 'Earrings' },
  { id: 5, name: 'Bridal Glow', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600', category: 'Choker' },
  { id: 6, name: 'Emerald Muse', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600', category: 'Ring' },
  { id: 7, name: 'Silver Charm', image: '/images/4.png', category: 'Anklet' },
  { id: 8, name: 'Diamond Aura', image: '/images/5.png', category: 'Pendant' },
];

const ProductGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-primary-dark mb-4"
            >
              Designer Jewellery
            </motion.h2>
            <p className="text-gray-500 uppercase tracking-[0.2em] text-sm">Our most loved collections</p>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-primary font-bold border-b-2 border-accent pb-1 uppercase tracking-widest text-sm"
          >
            View All Collections
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-accent text-xs uppercase tracking-[0.2em] mb-2">{product.category}</p>
                    <h3 className="text-white text-2xl font-serif mb-6">{product.name}</h3>
                    
                    <div className="flex gap-4">
                      <button className="bg-white text-primary p-3 rounded-full hover:bg-accent hover:text-white transition-colors">
                        <ShoppingCart size={20} />
                      </button>
                      <button className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white hover:text-primary transition-colors">
                        <Heart size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Always visible label on mobile if needed, but keeping it clean for premium feel */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
