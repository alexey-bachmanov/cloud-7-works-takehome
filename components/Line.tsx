import React from 'react';

const Line: React.FC<{ sx?: {} }> = function (sx) {
  const defaultStyle = {
    width: '100%',
    borderTop: '1px solid #e1e1e1',
  };
  return <div style={{ ...defaultStyle, ...sx }}></div>;
};

export default Line;
