import React from 'react';

const SubmitButton: React.FC<{ sx?: {} }> = function ({ sx }) {
  const defaultStyle = {
    width: '181px',
    height: '48px',
    color: '#fff',
    border: 'none',
    borderRadius: '60px',
    backgroundColor: '#2c2c2c',
  };
  return (
    <input type="submit" value="SUBMIT" style={{ ...defaultStyle, ...sx }} />
  );
};

export default SubmitButton;
