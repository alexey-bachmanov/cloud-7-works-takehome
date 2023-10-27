import React from 'react';
import Link from 'next/link';

const Breadcrumb: React.FC<{ links: string[][]; sx?: {} }> = function ({
  links,
  sx,
}) {
  // expect links = [ [ 'displayname', 'link address'], [...],... ]
  // TODO: implement this component. IRL, I would use Next Router to get the links,
  // or just find an off-the-shelf component that accomplishes what I want
  const defaultStyle = {
    display: 'flex',
    listStyle: 'none',
    color: '#616161',
    textDecoration: 'none',
  };
  return (
    <ol style={{ ...defaultStyle, ...sx }}>
      {links.map((lnk) => (
        <li key={lnk[0]}>
          <Link href={lnk[1]} shallow legacyBehavior>
            <a
              style={{
                margin: '0 4px',
                color: 'inherit',
                textDecoration: 'inherit',
              }}
            >
              {lnk[0] + ' ⇾'}
            </a>
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumb;
