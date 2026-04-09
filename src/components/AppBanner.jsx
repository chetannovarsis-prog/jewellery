import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

const AppBanner = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 bg-primary-dark z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -mr-48 -mt-48 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[80px] -ml-40 -mb-40" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-dark border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl"
        >
          <div className="mb-10 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
              Carry Elegance <br /> 
              <span className="text-accent italic">In Your Pocket</span>
            </h2>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Download the BrandName app for an exclusive shopping experience, 
              early access to new collections, and personalized bridal styling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <motion.button
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-2xl transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Play size={24} fill="currentColor" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase text-gray-400 tracking-wider">Get it on</p>
                <p className="text-white font-bold text-lg">Google Play</p>
              </div>
            </motion.button>

            <motion.button
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-2xl transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Apple size={24} />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase text-gray-400 tracking-wider">Download on the</p>
                <p className="text-white font-bold text-lg">App Store</p>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppBanner;
