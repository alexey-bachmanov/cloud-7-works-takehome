'use client';
import React, { useState } from 'react';
import LabelAndInput from './FormElements/LabelAndInput';
import LabelAndSelect from './FormElements/LabelAndSelect';
import LabelAndDate from './FormElements/LabelAndDate';
import Label from './FormElements/Label';
import Line from './Line';
import SubmitButton from './SubmitButton';

const FormMain: React.FC = function () {
  const [stateId, setStateId] = useState('');
  const [stateAltId, setStateAltId] = useState('');
  const [stateDln, setStateDln] = useState('');
  const [stateLastName, setStateLastName] = useState('');
  const [stateFirstName, setStateFirstName] = useState('');
  const [stateGender, setStateGender] = useState('M - MALE');
  const [stateDOB, setStateDOB] = useState('');
  const [stateAddressStreet, setStateAddressStreet] = useState('');
  const [stateAddressCity, setStateAddressCity] = useState('');
  const [stateAddressState, setStateAddressState] = useState('CA - California');
  const [stateAddressZip, setStateAddressZip] = useState('');
  const [stateAddressCountry, setStateAddressCountry] = useState('');
  const [stateTelephone, setStateTelephone] = useState('');
  const [stateEmail, setStateEmail] = useState('');
  const [stateLetterCheckbox, setStateLetterCheckbox] = useState(false);
  const [stateLetterDate, setStateLetterDate] = useState('');
  const [stateLetterComments, setStateLetterComments] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // SUBMIT LOGIC GOES HERE
    // we'll combine all the different state slices and send them off
    // to wherever they're going
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      style={{
        flexBasis: '100vh',
        display: 'grid',
        gridTemplateColumns: '5fr 4fr',
        gridTemplateRows: 'auto auto auto',
        gridAutoFlow: 'column',
        padding: '0 80px',
        width: '100%',
      }}
    >
      {/* ///// ABOUT ///// */}
      <fieldset
        style={{
          gridColumn: '1 / 2',
          gridRow: '1 / 3',
          border: 'none',
        }}
      >
        <h3 className="form-heading">ABOUT</h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <LabelAndInput
            label="unique id"
            id="id"
            value={stateId}
            onChange={(val: string) => setStateId(val)}
            sx={{ backgroundColor: '#e1e1e1' }}
          />
          <LabelAndInput
            label="alt id"
            id="altId"
            value={stateAltId}
            onChange={(val: string) => setStateAltId(val)}
            sx={{ backgroundColor: '#e1e1e1' }}
          />
        </div>

        <LabelAndInput
          label="dln"
          id="dln"
          value={stateDln}
          onChange={(val: string) => setStateDln(val)}
        />

        <LabelAndInput
          label="last name"
          id="lastName"
          value={stateLastName}
          onChange={(val: string) => setStateLastName(val)}
          sx={{ width: '294px', backgroundColor: '#e1e1e1' }}
        />

        <LabelAndInput
          label="first name"
          id="firstName"
          value={stateFirstName}
          onChange={(val: string) => setStateFirstName(val)}
          sx={{ width: '294px', backgroundColor: '#e1e1e1' }}
        />

        <LabelAndSelect
          label="gender"
          id="gender"
          options={[
            'M - MALE',
            'F - FEMALE',
            'NB - NON-BINARY',
            'I PREFER NOT TO ANSWER',
          ]}
          value={stateGender}
          onChange={(val: string) => setStateGender(val)}
          sx={{ width: '112px', backgroundColor: '#e1e1e1' }}
        />

        {/* No way can I implement my own date picker in 24 hours */}
        <LabelAndDate
          label="DOB"
          id="dob"
          value={stateDOB}
          onChange={(val: string) => setStateDOB(val)}
        />
      </fieldset>

      {/* ///// ADDRESS ///// */}
      <fieldset style={{ gridColumn: '2 / 3', border: 'none' }}>
        <h3 className="form-heading">ADDRESS</h3>

        <LabelAndInput
          label="street"
          id="streetAddress"
          value={stateAddressStreet}
          onChange={(val: string) => setStateAddressStreet(val)}
          sx={{ width: '316px' }}
        />

        <LabelAndInput
          label="city"
          id="city"
          value={stateAddressCity}
          onChange={(val: string) => setStateAddressCity(val)}
          sx={{ width: '316px' }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            width: '460px',
          }}
        >
          <LabelAndSelect
            label="state"
            id="state"
            value={stateAddressState}
            onChange={(val: string) => setStateAddressState(val)}
            options={['CA - California', 'NOT California']}
            sx={{ width: '171px' }}
          />
          <LabelAndInput
            label="zip"
            id="zip"
            labelWidth="50px"
            value={stateAddressZip}
            onChange={(val: string) => setStateAddressZip(val)}
            sx={{ width: '80px' }}
          />
        </div>

        <LabelAndSelect
          label="country"
          id="country"
          options={['UNITED STATES', 'CALIFORNIA IS ITS OWN COUNTRY!']}
          value={stateAddressCountry}
          onChange={(val: string) => setStateAddressCountry(val)}
          sx={{ width: '259px' }}
        />
      </fieldset>

      {/* ///// CONTACT ///// */}
      <fieldset style={{ gridColumn: '2 / 3', border: 'none' }}>
        <h3 className="form-heading">CONTACT</h3>

        <LabelAndInput
          label="telephone"
          id="telephone"
          value={stateTelephone}
          onChange={(val: string) => setStateTelephone(val)}
          sx={{ width: '167px' }}
        />

        <LabelAndInput
          label="email"
          id="email"
          value={stateEmail}
          onChange={(val: string) => setStateEmail(val)}
          sx={{ width: '307px' }}
        />
      </fieldset>

      {/* ///// LETTER ///// */}
      <fieldset style={{ gridColumn: '1 / 3', border: 'none' }}>
        <h3 className="form-heading">LETTER</h3>
        <Line />

        <div
          style={{
            display: 'flex',
            width: '954px',
            alignContent: 'center',
            justifyContent: 'space-between',
            margin: '16px 0 0 0',
          }}
        >
          <span>
            <input
              type="checkbox"
              id="sendALetter"
              checked={stateLetterCheckbox}
              onChange={(e) => setStateLetterCheckbox(e.target.checked)}
              style={{ margin: '6px' }}
            />
            <Label htmlFor="sendALetter" label="send a letter"></Label>
          </span>
          <LabelAndDate
            label="date"
            id="letterDate"
            value={stateLetterDate}
            onChange={(val: string) => setStateLetterDate(val)}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            margin: '48px 0 0 0',
          }}
        >
          <Label htmlFor="letter" label="comments" />
          <textarea
            id="letter"
            name="letter"
            rows={4}
            value={stateLetterComments}
            onChange={(e) => setStateLetterComments(e.target.value)}
            style={{ width: '694px', height: '109px', resize: 'none' }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '24px 0 0 100px',
            width: '300px',
          }}
        >
          <SubmitButton />
          {/* Since this resets the form, it should semantically be a button and not a link */}
          <button
            style={{
              border: 'none',
              color: 'blue',
              backgroundColor: 'rgba(0,0,0,0)',
              textDecoration: 'underline',
            }}
          >
            Reset Changes
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default FormMain;
