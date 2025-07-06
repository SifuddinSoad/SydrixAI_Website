import React, { useState } from 'react';
import { motion } from 'framer-motion';
import sifuddinImage from '../assets/images/sifuddin.jpg';
import safaImage from '../assets/images/shafayat.jpeg';
import rakibImage from '../assets/images/rakib.jpg';
import './Team.css';

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Sifuddin",
      role: "Founder & CEO",
      picture: sifuddinImage,
      linkedin: "https://www.linkedin.com/in/sifuddin-soad-062328317/",
      facebook: "https://www.facebook.com/sifuddin.sife",
      color: "linear-gradient(135deg, #6366f1, #a5b4fc)",
      bgColor: "rgba(99, 102, 241, 0.1)"
    },
    {
      id: 2,
      name: "Safawath Ahmed",
      role: "Founding Member",
        picture: safaImage,
        linkedin: "",
      facebook: "https://www.facebook.com/share/1JCb7Do2eN/",
      color: "linear-gradient(135deg, #8b5cf6, #c4b5fd)",
      bgColor: "rgba(139, 92, 246, 0.1)"
    },
    {
      id: 3,
      name: "Rakib Hasan",
      role: "Backend Developer",
      picture: rakibImage,
      linkedin: "https://www.linkedin.com/in/rakib-hasan-cuet/",
      facebook: " ",
      color: "linear-gradient(135deg, #06b6d4, #67e8f9)",
      bgColor: "rgba(6, 182, 212, 0.1)"
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      role: "Lead AI Engineer",
      picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      facebook: "https://facebook.com/michaelrodriguez",
      color: "linear-gradient(135deg, #10b981, #6ee7b7)",
      bgColor: "rgba(16, 185, 129, 0.1)"
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const memberVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="team-section">
      <motion.div 
        className="team-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div className="team-header" variants={memberVariants}>
          <h2 className="team-title">
            Meet Our
            <span className="gradient-text"> Amazing Team</span>
          </h2>
          <p className="team-subtitle">
            The brilliant minds behind SydrixAI's success
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="team-member-card"
              variants={memberVariants}
              onHoverStart={() => setHoveredMember(member.id)}
              onHoverEnd={() => setHoveredMember(null)}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Member Image */}
              <div className="member-image-container">
                <div 
                  className="member-image-bg"
                  style={{ background: member.color }}
                />
                <img 
                  src={member.picture} 
                  alt={member.name}
                  className="member-image"
                />
                <div className="member-overlay" />
              </div>

              {/* Member Info */}
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>

              {/* Social Links */}
              <motion.div 
                className="social-links"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: hoveredMember === member.id ? 1 : 0,
                  y: hoveredMember === member.id ? 0 : 20
                }}
                transition={{ duration: 0.3 }}
              >
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link facebook"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </motion.div>

              {/* Decorative Elements */}
              <div 
                className="member-accent"
                style={{ background: member.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div 
          className="team-stats"
          variants={memberVariants}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="stat-item">
            <h3 className="stat-number">4</h3>
            <p className="stat-label">Team Members</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">5+</h3>
            <p className="stat-label">Years Combined Experience</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">100%</h3>
            <p className="stat-label">Dedicated to Excellence</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Team; 