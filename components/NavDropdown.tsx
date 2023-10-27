'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const NavDropdown: React.FC<{ label: string; options: string[][]; sx?: {} }> =
  function ({ label, options, sx }) {
    const [isShowing, setIsShowing] = useState(true);
    const defaultStyle = {
      border: 'none',
      backgroundColor: 'rgba(0,0,0,0)',
      cursor: 'pointer',
    };

    const handleShow = () => {
      setIsShowing(true);
    };
    const handleHide = () => {
      setIsShowing(false);
    };
    const handleToggle = () => {
      setIsShowing((state) => !state);
    };

    return (
      <div
        onMouseEnter={handleShow}
        onMouseLeave={handleHide}
        onClick={handleToggle}
        style={{ cursor: 'pointer' }}
      >
        <button style={{ ...defaultStyle, ...sx }}>{label + ' ▼'}</button>
        <ul
          style={{
            display: isShowing ? 'block' : 'none',
            position: 'absolute',
            backgroundColor: '#fcfcfc',
            border: '1px solid #e1e1e1',
          }}
        >
          {options.map((opt) => (
            <li key={opt[0]} style={{ listStyle: 'none' }}>
              <Link href={opt[1]} shallow legacyBehavior>
                <a>{opt[0]}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default NavDropdown;
