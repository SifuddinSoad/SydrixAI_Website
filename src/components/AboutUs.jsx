import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('mission');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About SydrixAI</h2>
          <div className="title-underline"></div>
          <p className="about-subtitle">Your AI-Powered Learning Companion</p>
        </div>
        
        <div className="docs-container">
          <div className="docs-sidebar">
            <div className="docs-nav">
              <h3 className="nav-title">    About Us</h3>
              <div className="nav-items">
                <button 
                  className={`nav-item ${activeSection === 'mission' ? 'active' : ''}`} 
                  onClick={() => handleNavClick('mission')}
                >
                  <span className="nav-icon">🎯</span>
                  Our Mission
                </button>
                <button 
                  className={`nav-item ${activeSection === 'problems' ? 'active' : ''}`} 
                  onClick={() => handleNavClick('problems')}
                >
                  <span className="nav-icon">🔍</span>
                  Problems We Solve
                </button>
                <button 
                  className={`nav-item ${activeSection === 'features' ? 'active' : ''}`} 
                  onClick={() => handleNavClick('features')}
                >
                  <span className="nav-icon">⚡</span>
                  Key Features
                </button>
                <button 
                  className={`nav-item ${activeSection === 'benefits' ? 'active' : ''}`} 
                  onClick={() => handleNavClick('benefits')}
                >
                  <span className="nav-icon">💎</span>
                  Benefits
                </button>
              </div>
            </div>
          </div>

          <div className="docs-content">
            <div className={`content-section ${activeSection === 'mission' ? 'active' : ''}`} id="mission">
              <div className="section-header">
                <h3 className="section-title">Our Mission</h3>
                <div className="section-badge">Core Goal</div>
              </div>
              <div className="section-content">
                <div className="mission-card">
                  <div className="mission-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                      <path d="M19 15L19.74 17.74L22.5 18.5L19.74 19.26L19 22L18.26 19.26L15.5 18.5L18.26 17.74L19 15Z" fill="currentColor"/>
                      <path d="M5 6L5.74 8.74L8.5 9.5L5.74 10.26L5 13L4.26 10.26L1.5 9.5L4.26 8.74L5 6Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="mission-content">
                    <h4>Transform Education with AI</h4>
                    <p>Make a fully stable, accessible, scalable, affordable, and high-quality AI tutor and guidance system for high school students.</p>
                    <div className="mission-highlights">
                      <span className="highlight">Stable</span>
                      <span className="highlight">Accessible</span>
                      <span className="highlight">Scalable</span>
                      <span className="highlight">Affordable</span>
                      <span className="highlight">High-Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`content-section ${activeSection === 'problems' ? 'active' : ''}`} id="problems">
              <div className="section-header">
                <h3 className="section-title">Problems We Solve</h3>
                <div className="section-badge">Student Challenges</div>
              </div>
              <div className="section-content">
                <div className="problems-grid">
                  <div className="problem-card">
                    <div className="problem-icon">📚</div>
                    <h4>Lack of Personalized Guidance</h4>
                    <p>Students struggle without tailored learning paths that adapt to their unique needs and learning styles.</p>
                  </div>
                  <div className="problem-card">
                    <div className="problem-icon">📊</div>
                    <h4>Poor Study Consistency</h4>
                    <p>Inconsistent study habits lead to gaps in knowledge and reduced academic performance.</p>
                  </div>
                  <div className="problem-card">
                    <div className="problem-icon">🎯</div>
                    <h4>Scattered Progress Tracking</h4>
                    <p>No centralized system to monitor learning progress and identify areas for improvement.</p>
                  </div>
                  <div className="problem-card">
                    <div className="problem-icon">💡</div>
                    <h4>No Clear Daily Targets</h4>
                    <p>Students feel lost without specific, achievable daily learning objectives.</p>
                  </div>
                  <div className="problem-card">
                    <div className="problem-icon">💰</div>
                    <h4>Expensive Tutoring Costs</h4>
                    <p>High-quality private tutoring is often unaffordable for many families.</p>
                  </div>
                  <div className="problem-card">
                    <div className="problem-icon">🎓</div>
                    <h4>Traditional Systems Fail to Adapt</h4>
                    <p>One-size-fits-all approaches don't accommodate individual learning differences.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`content-section ${activeSection === 'features' ? 'active' : ''}`} >
              <div className="section-header">
                <h3 className="section-title">Key Features</h3>
                <div className="section-badge">Core Capabilities</div>
              </div>
              <div className="section-content">
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">🤖</div>
                    <h4>AI-Powered Learning</h4>
                    <p>Advanced artificial intelligence that adapts to each student's learning pace and style.</p>
                    <div className="feature-tags">
                      <span className="tag">Personalized</span>
                      <span className="tag">Adaptive</span>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">📱</div>
                    <h4>Always Accessible</h4>
                    <p>Available anytime, anywhere on any device with seamless cross-platform experience.</p>
                    <div className="feature-tags">
                      <span className="tag">24/7</span>
                      <span className="tag">Multi-device</span>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">📈</div>
                    <h4>Scalable Growth</h4>
                    <p>Grows with your learning needs and progress, adapting to different subjects and levels.</p>
                    <div className="feature-tags">
                      <span className="tag">Flexible</span>
                      <span className="tag">Progressive</span>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">💎</div>
                    <h4>Premium Quality</h4>
                    <p>High-quality educational content and methodology backed by proven learning science.</p>
                    <div className="feature-tags">
                      <span className="tag">Expert</span>
                      <span className="tag">Research-based</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`content-section ${activeSection === 'benefits' ? 'active' : ''}`} id="benefits">
              <div className="section-header">
                <h3 className="section-title">Student Benefits</h3>
                <div className="section-badge">Why Choose SydrixAI</div>
              </div>
              <div className="section-content">
                <div className="benefits-list">
                  <div className="benefit-item">
                    <div className="benefit-number">01</div>
                    <div className="benefit-content">
                      <h4>Personalized Learning Path</h4>
                      <p>AI creates custom study plans based on your strengths, weaknesses, and learning goals.</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-number">02</div>
                    <div className="benefit-content">
                      <h4>Real-time Progress Tracking</h4>
                      <p>Monitor your learning journey with detailed analytics and performance insights.</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-number">03</div>
                    <div className="benefit-content">
                      <h4>Affordable Excellence</h4>
                      <p>Get premium tutoring quality at a fraction of the cost of traditional private tutors.</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-number">04</div>
                    <div className="benefit-content">
                      <h4>24/7 Learning Support</h4>
                      <p>Study at your own pace with round-the-clock access to learning resources and guidance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 