import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
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
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.7 }}>
          Welcome to SydrixAI
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.7 }}>
          This is a modern React website. Use the top navigation to explore.
        </motion.p>
      </motion.main>
    </motion.div>
  );
}

export default App;
