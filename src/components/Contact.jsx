import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Section id="contact">
      <h2 className="contact-title">Contact Us</h2>
      <StyledWrapper>
        <form className="form">
          <div className="flex">
            <label>
              <input className="input" type="text" placeholder required />
              <span>First Name</span>
            </label>
            <label>
              <input className="input" type="text" placeholder required />
              <span>Last Name</span>
            </label>
          </div>  
          <label>
            <input className="input" type="email" placeholder required />
            <span>Email</span>
          </label> 
          <label>
            <input className="input" placeholder type="tel" required />
            <span>Contact Number</span>
          </label>
          <label>
            <textarea className="input01" placeholder rows={3} required defaultValue={""} />
            <span>Message</span>
          </label>
          <button type="submit" className="fancy">
            <span className="text">Submit</span>
          </button>
        </form>
      </StyledWrapper>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  background: linear-gradient(135deg, #1e293b 0%, #6366f1 100%);
  padding: 4rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  border-radius: 2rem 2rem 0 0;
  z-index: 100;
  position: relative;
`;

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
    width: 100%;
    background-color: #355891;
    padding: 30px;
    border-radius: 15px;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  .message {
    color: #355891;
    font-size: 14px;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 15px;
  }

  .flex label {
    flex: 1;
  }

  .form label {
    position: relative;
    display: block;
  }

  .form label .input {
    width: 100%;
    padding: 15px 15px 15px 15px;
    outline: 0;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 16px;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  .form label .input::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-style: italic;
    font-size: 14px;
  }

  .form label .input:focus {
    border-color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.15);
  }

  .form label .input:focus::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  .form label .input + span {
    position: absolute;
    left: 15px;
    top: 15px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    cursor: text;
    transition: 0.3s ease;
    pointer-events: none;
    background: transparent;
    padding: 0 5px;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 14px;
    background: transparent;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    top: -8px;
    font-size: 12px;
    font-weight: 600;
    color: white;
    background: #355891;
  }

  .form label .input:valid + span {
    color: #4ade80;
  }

  .input01 {
    width: 100%;
    padding: 15px 15px 15px 15px;
    outline: 0;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 16px;
    transition: all 0.3s ease;
    box-sizing: border-box;
    resize: vertical;
    min-height: 100px;
  }

  .input01::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-style: italic;
    font-size: 14px;
  }

  .input01:focus {
    border-color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.15);
  }

  .input01:focus::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  .form label .input01 + span {
    position: absolute;
    left: 15px;
    top: 15px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    cursor: text;
    transition: 0.3s ease;
    pointer-events: none;
    background: transparent;
    padding: 0 5px;
  }

  .form label .input01:placeholder-shown + span {
    top: 15px;
    font-size: 14px;
    background: transparent;
  }

  .form label .input01:focus + span,
  .form label .input01:valid + span {
    top: -8px;
    font-size: 12px;
    font-weight: 600;
    color: white;
    background: #355891;
  }

  .form label .input01:valid + span {
    color: #4ade80;
  }

  .fancy {
    background-color: white;
    border: 2px solid #355891;
    border-radius: 8px;
    box-sizing: border-box;
    color: #355891;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 20px 0 0 0;
    outline: none;
    overflow: hidden;
    padding: 15px 30px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    user-select: none;
    font-size: 14px;
    width: 100%;
    max-width: 200px;
    align-self: center;
  }

  .fancy .text {
    font-size: 1.125em;
    line-height: 1.33333em;
    display: block;
    text-align: center;
    transition: all 0.3s ease-in-out;
    text-transform: lowercase;
    text-decoration: none;
    color: #355891;
    position: relative;
    z-index: 2;
  }

  .fancy::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 26px;
    width: 0;
    height: 2px;
    background: #355891;
    transform: translateY(-50%);
    transition: all 0.3s ease-in-out;
    z-index: 1;
  }

  .fancy::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 20px;
    width: 0;
    height: 0;
    border-left: 6px solid #355891;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    transform: translateY(-50%);
    transition: all 0.3s ease-in-out;
    z-index: 1;
  }

  .fancy:hover {
    color: #355891;
    background: #5f82a9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .fancy:hover::before {
    width: 20px;
    right: 26px;
  }

  .fancy:hover::after {
    right: 20px;
  }

  .fancy:hover .text {
    color: white;
    transform: translateX(-10px);
  }

  @media (max-width: 768px) {
    .form {
      max-width: 90%;
      padding: 20px;
      gap: 15px;
    }
    
    .flex {
      flex-direction: column;
      gap: 15px;
    }
    
    .fancy {
      max-width: 100%;
    }
  }
`;

export default Contact; 