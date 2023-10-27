'use client';
import React from 'react';
import Label from './Label';

const LabelAndDate: React.FC<{
  label: string;
  id: string;
  sx?: {};
  value: string;
  onChange: Function;
}> = function ({ label, id, value, onChange, sx }) {
  const defaultStyle = {
    border: '1px solid #e1e1e1',
    backgroundColor: '#fcfcfc',
    borderRadius: '4px',
    padding: '5px 6px',
    height: '32px',
    width: '140px',
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '6px 0' }}>
      <Label htmlFor={id} label={label} />
      <input
        type="date"
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ ...defaultStyle, ...sx }}
      />
    </div>
  );
};

export default LabelAndDate;
