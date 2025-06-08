import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import MenuSection from './MenuSection';
import ContactSection from './ContactSection';
import AddressSection from './AddressSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <MenuSection />
      <ContactSection />
      <AddressSection />
      <Footer />
    </div>
  );
};

export default HomePage;