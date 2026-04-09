import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <a href="/" className="text-3xl font-serif font-bold tracking-tighter">
              Brand<span className="text-accent">Name</span>
            </a>
            <p className="text-gray-400 leading-relaxed font-light">
              Elevating your elegance through handcrafted jewellery that tells a story of tradition 
              and modernity. Join our journey in crafting timeless emotions.
            </p>
            <div className="flex gap-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary-dark transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* About Column */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-accent">Online Shopping</h4>
            <ul className="space-y-4">
              {['New Arrivals', 'Best Sellers', 'Discounted Items', 'Collection Guide', 'Size Chart'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-accent">Useful Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Contact Us', 'Terms & Conditions', 'Privacy Policy', 'Returns & Shipping'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-accent">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-accent shrink-0" size={20} />
                <p className="text-gray-400 text-sm leading-relaxed">
                  123 Jewellery Lane, Diamond District,<br /> Mumbai, Maharashtra 400001
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-accent shrink-0" size={20} />
                <p className="text-gray-400 text-sm">+91 98765 43210</p>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-accent shrink-0" size={20} />
                <p className="text-gray-400 text-sm">support@brandname.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 BrandName. All rights reserved. Designed for Premium Feel.
          </p>
          <div className="flex gap-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4 opacity-30 grayscale hover:grayscale-0 transition-all cursor-pointer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 opacity-30 grayscale hover:grayscale-0 transition-all cursor-pointer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="Paypal" className="h-5 opacity-30 grayscale hover:grayscale-0 transition-all cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
