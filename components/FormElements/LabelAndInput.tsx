'use client';
import React, { useState } from 'react';
import Label from './Label';

const LabelAndInput: React.FC<{
  label: string;
  id: string;
  sx?: {};
  labelWidth?: string;
  onChange: Function;
  value: string;
}> = function ({ label, id, sx, labelWidth, onChange, value }) {
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
      <Label htmlFor={id} label={label} labelWidth={labelWidth} />
      <input
        type="text"
        id={id}
        name={id}
        style={{ ...defaultStyle, ...sx }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default LabelAndInput;
