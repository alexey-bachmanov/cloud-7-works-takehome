import React from 'react';

const Label: React.FC<{
  htmlFor: string;
  label: string;
  labelWidth?: string;
  sx?: {};
}> = function ({ htmlFor, label, labelWidth = '90px', sx }) {
  const defaultStyle = {
    width: '100%',
    flexBasis: labelWidth,
    fontSize: '16px',
    paddingRight: '10px',
  };
  return (
    <label
      htmlFor={htmlFor}
      style={{ ...defaultStyle, ...sx, textAlign: 'right' }}
    >
      {label.toUpperCase()}
    </label>
  );
};

export default Label;
