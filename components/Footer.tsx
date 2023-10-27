import React from 'react';

import Link from 'next/link';

const Footer: React.FC<{ sx?: {} }> = function ({ sx }) {
  const defaultStyle = {
    width: '100%',
    display: 'flex',
    backgroundColor: '#CCC',
    height: '44px',
    alignItems: 'center',
  };
  return (
    <footer style={{ ...defaultStyle, ...sx }}>
      <p style={{ flexBasis: '100%', marginLeft: '80px' }}>
        © 20XX All Rights Reserved
      </p>
      <Link href="#" shallow legacyBehavior>
        <a style={{ color: '#000', margin: '0 40px' }}>CONTACT</a>
      </Link>
      <Link href="#" shallow legacyBehavior>
        <a style={{ color: '#000', marginRight: '80px' }}>HELP</a>
      </Link>
    </footer>
  );
};

export default Footer;
