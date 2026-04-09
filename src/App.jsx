import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import AppBanner from './components/AppBanner';
import ProductGrid from './components/ProductGrid';
import BrandInfo from './components/BrandInfo';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <BrandInfo />
      <ProductGrid />
      <AppBanner />
      <Footer />
    </main>
  );
}

export default App;
