import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Facilities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;