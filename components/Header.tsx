import React from 'react';

import Link from 'next/link';
import PrimaryNav from './PrimaryNav';
import NavDropdown from './NavDropdown';
import Breadcrumb from './Breadcrumb';
import Line from './Line';

const Header: React.FC = function () {
  return (
    <header style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {/* ///// USER DROPDOWN THING ///// */}
      <div
        style={{
          backgroundColor: '#d9d9d9',
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          padding: '0px 80px',
        }}
      >
        <NavDropdown
          label="Hi Barbera"
          options={[
            ['option 1', '#'],
            ['option 2', '#'],
          ]}
        />
      </div>

      {/* ///// LOGO AND PRIMARY NAV ///// */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 80px',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#d9d9d9',
            width: '241px',
            height: '73px',
          }}
        >
          <Link href="#" shallow legacyBehavior>
            <a
              style={{
                textDecoration: 'none',
                color: '#000',
              }}
            >
              WEB PORTAL LOGO
            </a>
          </Link>
        </div>
        <PrimaryNav />
      </div>
      <Line />

      {/* ///// BREADCRUMB ///// */}
      <div style={{ padding: '0 80px' }}>
        <Breadcrumb
          links={[
            ['main', '#'],
            ['page', '#'],
            ['sub-page', '#'],
          ]}
        />
      </div>

      {/* ///// HEADING AND TEXT LINK ///// */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '0 80px',
        }}
      >
        <h1>Donec Lorem Magna</h1>
        <Link href="#" shallow legacyBehavior>
          <a>Text Link</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
