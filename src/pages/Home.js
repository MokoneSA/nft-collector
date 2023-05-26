import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';

function Home(){
  return (
    <>
        <header>
            <>
            <Navbar />
            <HeroSection />
            <MainContent />
            <Footer />
            </>
        </header>

    </>
  )
}

export default Home;
