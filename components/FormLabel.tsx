'use client';
import React, { useState } from 'react';
import LabelAndSelect from './FormElements/LabelAndSelect';
import SubmitButton from './SubmitButton';

const FormLabel: React.FC = function () {
  const [stateLabelVal, setStateLabelVal] = useState('SELECT AN OPTION');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // LOGIC GOES HERE
  };
  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'stretch',
        width: '100%',
        padding: '0 80px 24px 80px',
      }}
    >
      <LabelAndSelect
        label="label"
        id="label"
        options={['SELECT AN OPTION', 'option1', 'option2']}
        value={stateLabelVal}
        onChange={(val: string) => setStateLabelVal(val)}
        sx={{ width: '618px', backgroundColor: '#e1e1e1' }}
      />
      <SubmitButton sx={{ backgroundColor: '#b9b9b9', marginLeft: '24px' }} />
    </form>
  );
};

export default FormLabel;
