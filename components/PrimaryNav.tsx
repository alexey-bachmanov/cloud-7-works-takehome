import React from 'react';
import Link from 'next/link';
import NavDropdown from './NavDropdown';

const menuStyle = {
  fontWeight: '600',
  margin: '0 10px',
  fontSize: '16px',
};
const dropdownOverride = {
  fontWeight: '600',
  fontSize: '14px',
};

const PrimaryNav: React.FC = function () {
  return (
    <nav style={{ display: 'flex' }}>
      <Link href="#" shallow legacyBehavior>
        <a style={{ color: '#000', textDecoration: 'none', ...menuStyle }}>
          Dashboard
        </a>
      </Link>
      <Link href="#" shallow legacyBehavior>
        <a style={{ color: '#000', textDecoration: 'none', ...menuStyle }}>
          Lorem Ipsum
        </a>
      </Link>
      <Link href="#" shallow legacyBehavior>
        <a style={{ color: '#000', textDecoration: 'none', ...menuStyle }}>
          Dolor
        </a>
      </Link>
      <NavDropdown
        label="Sit Amet"
        options={[
          ['option 1', '#'],
          ['option 2', '#'],
        ]}
        sx={{ ...menuStyle, ...dropdownOverride }}
      />
      <NavDropdown
        label="Ullamcorpor"
        options={[
          ['option 1', '#'],
          ['option 2', '#'],
        ]}
        sx={{ ...menuStyle, ...dropdownOverride }}
      />
      <NavDropdown
        label="Morbi Rutrum"
        options={[
          ['option 1', '#'],
          ['option 2', '#'],
        ]}
        sx={{ ...menuStyle, ...dropdownOverride }}
      />
    </nav>
  );
};

export default PrimaryNav;
