import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Routine Management System",
      description: "Effortlessly organize and manage daily study schedules with our intelligent planning system.",
      icon: "📅",
      color: "linear-gradient(135deg, #6366f1, #a5b4fc)",
      bgColor: "rgba(99, 102, 241, 0.1)"
    },
    {
      id: 1,
      title: "Comprehensive Study Reports",
      description: "Gain insights into learning progress through detailed analytics and performance metrics.",
      icon: "📊",
      color: "linear-gradient(135deg, #8b5cf6, #c4b5fd)",
      bgColor: "rgba(139, 92, 246, 0.1)"
    },
    {
      id: 2,
      title: "Study Time Tracker",
      description: "Monitor and optimize study durations for improved productivity and better time management.",
      icon: "⏱️",
      color: "linear-gradient(135deg, #06b6d4, #67e8f9)",
      bgColor: "rgba(6, 182, 212, 0.1)"
    },
    {
      id: 3,
      title: "Practice Tracking System",
      description: "Keep track of practice sessions to measure consistency and performance over time.",
      icon: "🎯",
      color: "linear-gradient(135deg, #10b981, #6ee7b7)",
      bgColor: "rgba(16, 185, 129, 0.1)"
    },
    {
      id: 4,
      title: "Peer Comparison Tool",
      description: "Compare progress with friends and group members to stay motivated and competitive.",
      icon: "👥",
      color: "linear-gradient(135deg, #f59e0b, #fbbf24)",
      bgColor: "rgba(245, 158, 11, 0.1)"
    },{
      id: 5,
      title: "AI Tutor",
      description: "Get personalized study recommendations and guidance from our AI tutor.",
      icon: "🤖",
      color: "linear-gradient(135deg, #f59e0b, #fbbf24)",
      bgColor: "rgba(245, 158, 11, 0.1)"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
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
    <section className="features-section" id="features">
      <motion.div 
        className="features-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div className="features-header" variants={itemVariants}>
          <h2 className="features-title">
            Powerful Features for
            <span className="gradient-text"> Modern Learning</span>
          </h2>
          <p className="features-subtitle">
            Discover the tools that will revolutionize your study experience
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={`feature-card ${activeFeature === index ? 'active' : ''}`}
              variants={itemVariants}
              onClick={() => setActiveFeature(index)}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Feature Icon */}
              <div 
                className="feature-icon"
                style={{ background: feature.color }}
              >
                <span className="icon-emoji">{feature.icon}</span>
              </div>

              {/* Feature Content */}
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>

              {/* Active Indicator */}
              <div className="active-indicator" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features; 