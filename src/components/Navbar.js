import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../logo.png';
import '../App.css';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#how', label: 'How to use' },
  { href: '#features', label: 'Features' },
  { href: '#about', label: 'About Us' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on link click (for mobile)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <motion.nav
      className="topbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 12 }}
    >
      <motion.a
        href="#home"
        className="topbar-logo"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
      >
        <motion.img
          src={logo}
          alt="Logo"
          style={{ height: 36, width: 36, borderRadius: '0.5rem' }}
          initial={{ rotate: -30 }}
          animate={{ rotate: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 0.4 }}
        />
        SydrixAI
      </motion.a>
      <button
        className="hamburger"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span
          style={{
            transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
            background: menuOpen ? 'var(--accent)' : 'var(--primary)',
          }}
        />
        <span
          style={{
            opacity: menuOpen ? 0 : 1,
            transform: menuOpen ? 'translateX(-10px)' : 'none',
            background: menuOpen ? 'var(--accent)' : 'var(--primary)',
          }}
        />
        <span
          style={{
            transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
            background: menuOpen ? 'var(--accent)' : 'var(--primary)',
          }}
        />
      </button>
      <motion.div
        className={`topbar-nav${menuOpen ? ' open' : ''}`}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.5,
            },
          },
        }}
      >
        {navLinks.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="topbar-link"
            onClick={handleLinkClick}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.1, color: 'var(--primary)' }}
            whileTap={{ scale: 0.95 }}
          >
            {link.label}
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 