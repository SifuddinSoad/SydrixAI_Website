import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

function App() {
  return (
    <motion.div className="App" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <Navbar />
      <motion.main
        style={{ padding: '2rem', minHeight: 'calc(100vh - 64px)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Hero />
        <Contact />
      </motion.main>
      <Footer />
    </motion.div>
  );
}

export default App;
