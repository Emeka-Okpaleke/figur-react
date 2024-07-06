import React, { useState, useEffect } from 'react';
import iphone13Pro from '../assets/image/iphone-13-Pro.png';

const Section3 = () => {
  const items = [
    'Pay bills at the lowest',
    'Own a personal bank account',
    'Receive and withdraw money',
    'Create your USD and Naira card',
    'Send money to an email',
  ];

  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="section3-div">
      <div className="section3-text section3-img">
        <img src={iphone13Pro} alt="" />
      </div>

      <div className="section3-text">
        <h2>Do more with Figur</h2>
        <p>Save yourself up to 15% of the money you use on your monthly bills.
          Enjoy cashback every time you pay bills</p>

        <div className="scroll-container">
          <ul>
            {items.map((item, index) => (
              <li key={index} className={index === highlightedIndex ? 'highlighted' : ''}>
                {item}
              </li>
            ))}
          </ul>
          <div className="scrollbar"></div>
        </div>
      </div>
    </div>
  );
}

export default Section3;

