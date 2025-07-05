import React from 'react';
import '../App.css';
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <section className="home-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
      <img src={logo} alt="SydrixAI Logo" style={{ width: '180px', height: 'auto', marginBottom: '2rem' }} />
      <h1>Welcome to SydrixAI</h1>
      <p>Your gateway to modern AI solutions. Explore our features and discover the future of intelligent technology.</p>
    </section>
  );
};

export default Home; 