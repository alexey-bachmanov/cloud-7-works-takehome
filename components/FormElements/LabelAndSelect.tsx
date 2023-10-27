'use client';
import React from 'react';
import Label from './Label';

const LabelAndSelect: React.FC<{
  label: string;
  id: string;
  options: string[];
  sx?: {};
  onChange: Function;
  value: string;
}> = function ({ label, id, options, sx, onChange, value }) {
  const defaultStyle = {
    border: '1px solid #e1e1e1',
    backgroundColor: '#fcfcfc',
    borderRadius: '4px',
    padding: '5px 6px',
    width: '144px',
    height: '32px',
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '6px 0' }}>
      <Label htmlFor={id} label={label} />
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ ...defaultStyle, ...sx }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}{' '}
      </select>
    </div>
  );
};

export default LabelAndSelect;
