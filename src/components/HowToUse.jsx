import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './HowToUse.css';

const HowToUse = () => {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      id: 1,
      title: "Sign Up",
      description: "Create your account and join thousands of students",
      icon: "👤",
      color: "linear-gradient(135deg, #6366f1, #a5b4fc)",
      bgColor: "rgba(99, 102, 241, 0.1)"
    },
    {
      id: 2,
      title: "Complete Your Profile",
      description: "Set up your learning preferences and goals",
      icon: "⚙️",
      color: "linear-gradient(135deg, #8b5cf6, #c4b5fd)",
      bgColor: "rgba(139, 92, 246, 0.1)"
    },
    {
      id: 3,
      title: "Set Your Study Plan",
      description: "Create a personalized study schedule that fits your routine",
      icon: "📋",
      color: "linear-gradient(135deg, #06b6d4, #67e8f9)",
      bgColor: "rgba(6, 182, 212, 0.1)"
    },
    {
      id: 4,
      title: "Learn with AI Tutor",
      description: "Get personalized guidance from our intelligent AI assistant",
      icon: "🤖",
      color: "linear-gradient(135deg, #10b981, #6ee7b7)",
      bgColor: "rgba(16, 185, 129, 0.1)"
    },
    {
      id: 5,
      title: "Track Study Progress",
      description: "Monitor your learning journey with detailed analytics",
      icon: "📊",
      color: "linear-gradient(135deg, #f59e0b, #fbbf24)",
      bgColor: "rgba(245, 158, 11, 0.1)"
    },
    {
      id: 6,
      title: "Track Practice Progress",
      description: "Keep track of your practice sessions and improvements",
      icon: "🎯",
      color: "linear-gradient(135deg, #ef4444, #fca5a5)",
      bgColor: "rgba(239, 68, 68, 0.1)"
    },
    {
      id: 7,
      title: "Visualize Performance",
      description: "See your progress through beautiful charts and graphs",
      icon: "📈",
      color: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
      bgColor: "rgba(139, 92, 246, 0.1)"
    },
    {
      id: 8,
      title: "Compare with Friends",
      description: "Stay motivated by comparing your progress with peers",
      icon: "👥",
      color: "linear-gradient(135deg, #06b6d4, #22d3ee)",
      bgColor: "rgba(6, 182, 212, 0.1)"
    },
    {
      id: 9,
      title: "Compete with Thousands",
      description: "Join global competitions and challenge yourself",
      icon: "🏆",
      color: "linear-gradient(135deg, #f59e0b, #fbbf24)",
      bgColor: "rgba(245, 158, 11, 0.1)"
    },
    {
      id: 10,
      title: "Get Better Every Day",
      description: "Continuous improvement through daily practice and feedback",
      icon: "📈",
      color: "linear-gradient(135deg, #10b981, #34d399)",
      bgColor: "rgba(16, 185, 129, 0.1)"
    },
    {
      id: 11,
      title: "Stay Consistent",
      description: "Maintain your momentum with daily insights and reminders",
      icon: "🔥",
      color: "linear-gradient(135deg, #ef4444, #f87171)",
      bgColor: "rgba(239, 68, 68, 0.1)"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="how-to-use-section">
      <motion.div 
        className="how-to-use-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div className="workflow-header" variants={stepVariants}>
          <h2 className="workflow-title">
            How to Get Started with
            <span className="gradient-text"> SydrixAI</span>
          </h2>
          <p className="workflow-subtitle">
            Follow these simple steps to begin your learning journey
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="workflow-container">
          <div className="workflow-timeline">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`workflow-step ${activeStep === index ? 'active' : ''}`}
                variants={stepVariants}
                onClick={() => setActiveStep(index)}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Step Number */}
                <div className="step-number">{step.id}</div>
                
                {/* Step Icon */}
                <div 
                  className="step-icon"
                  style={{ background: step.color }}
                >
                  <span className="step-emoji">{step.icon}</span>
                </div>

                {/* Step Content */}
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>

                {/* Connection Line */}
                {index < workflowSteps.length - 1 && (
                  <div className="step-connector" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Step Details Panel */}
          <motion.div 
            className="step-details-panel"
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: { duration: 0.5, delay: 0.3 }
            }}
          >
            <div 
              className="details-content"
              style={{ background: workflowSteps[activeStep].bgColor }}
            >
              <div className="details-icon" style={{ background: workflowSteps[activeStep].color }}>
                <span className="details-emoji">{workflowSteps[activeStep].icon}</span>
              </div>
              <div className="details-text">
                <h3>Step {workflowSteps[activeStep].id}</h3>
                <h4>{workflowSteps[activeStep].title}</h4>
                <p>{workflowSteps[activeStep].description}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <motion.div className="progress-indicator" variants={stepVariants}>
          <div className="progress-bar">
            <motion.div 
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${((activeStep + 1) / workflowSteps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <span className="progress-text">
            Step {activeStep + 1} of {workflowSteps.length}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowToUse; 