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
              <span>first name</span>
            </label>
            <label>
              <input className="input" type="text" placeholder required />
              <span>last name</span>
            </label>
          </div>  
          <label>
            <input className="input" type="email" placeholder required />
            <span>email</span>
          </label> 
          <label>
            <input className="input" placeholder type="tel" required />
            <span>contact number</span>
          </label>
          <label>
            <textarea className="input01" placeholder rows={3} required defaultValue={""} />
            <span>message</span>
          </label>
          <button type="submit" className="fancy">
            <span className="top-key" />
            <span className="text">submit</span>
            <span className="bottom-key-1" />
            <span className="bottom-key-2" />
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
    gap: 10px;
    max-width: 350px;
    background-color: #355891;
    padding: 20px;
    border-radius: 10px;
    position: relative;
  }

  .message {
    color: #355891;
    font-size: 14px;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid #355891;
    border-radius: 5px;
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: #355891;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,.form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: green;
  }

  .input01 {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid #355891;
    border-radius: 5px;
  }

  .form label .input01 + span {
    position: absolute;
    left: 10px;
    top: 50px;
    color: #355891;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input01:placeholder-shown + span {
    top: 40px;
    font-size: 0.9em;
  }

  .form label .input01:focus + span,.form label .input01:valid + span {
    top: 50px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input01:valid + span {
    color: green;
  }

  .fancy {
    background-color: white;
    border: 2px solid #355891;
    border-radius: 0px;
    box-sizing: border-box;
    color: #355891;
    cursor: pointer;
    display: inline-block;
    font-weight: 390;
    letter-spacing: 2px;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 8px 30px;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    transition: all 0.3s ease-in-out;
    user-select: none;
    font-size: 13px;
  }

  .fancy::before {
    content: " ";
    width: 1.7rem;
    height: 2px;
    background: #355891;
    top: 50%;
    left: 1.5em;
    position: absolute;
    transform: translateY(-50%);
    transform: translateX(230%);
    transform-origin: center;
    transition: background 0.3s linear, width 0.3s linear;
  }

  .fancy .text {
    font-size: 1.125em;
    line-height: 1.33333em;
    padding-left: 2em;
    display: block;
    text-align: left;
    transition: all 0.3s ease-in-out;
    text-transform: lowercase;
    text-decoration: none;
    color: #355891;
    transform: translateX(30%);
  }

  .fancy .top-key {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: #355891;
    transition: width 0.5s ease-out, left 0.3s ease-out;
  }

  .fancy .bottom-key-1 {
    height: 2px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: #355891;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  .fancy .bottom-key-2 {
    height: 2px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: #355891;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  .fancy:hover {
    color: #355891;
    background: #5f82a9;
  }

  .fancy:hover::before {
    width: 1.5rem;
    background: #355891;
  }

  .fancy:hover .text {
    color: white;
    padding-left: 1.5em;
  }

  .fancy:hover .top-key {
    left: -2px;
    width: 0px;
  }

  .fancy:hover .bottom-key-1,
   .fancy:hover .bottom-key-2 {
    right: 0;
    width: 0;
  }
`;

export default Contact; 