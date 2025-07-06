import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutUs from './components/AboutUs.jsx';
import Features from './components/Features.jsx';
import HowToUse from './components/HowToUse.jsx';
import Team from './components/Team.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Intersection Observer for smooth section animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach(section => {
      if (section) {
        section.classList.add('section-fade-in');
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <motion.div 
      className="App" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.7 }}
    >
      <Navbar />
      <motion.main
        className="main-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Hero Section */}
        <section 
          id="home" 
          ref={addToRefs}
          className="section-container"
        >
          <Hero />
        </section>

        {/* About Us Section */}
        <section 
          id="about" 
          ref={addToRefs}
          className="section-container"
        >
          <AboutUs />
        </section>

        {/* Features Section */}
        <section 
          id="features" 
          ref={addToRefs}
          className="section-container"
        >
          <Features />
        </section>

        {/* How to Use Section */}
        <section 
          id="how" 
          ref={addToRefs}
          className="section-container"
        >
          <HowToUse />
        </section>

        {/* Team Section */}
        <section 
          id="team" 
          ref={addToRefs}
          className="section-container"
        >
          <Team />
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          ref={addToRefs}
          className="section-container"
        >
          <Contact />
        </section>
      </motion.main>
      <Footer />
    </motion.div>
  );
}

export default App;
