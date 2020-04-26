import React from 'react';
import { Label, Range, ButtonGroup, Output } from './Components';

export const ToggleControls = ({ handleChange }) => {
  return (
    <div className='ctrl-ico' data-action='toggle-ctrl' onClick={handleChange}>
      &#10177;
    </div>
  );
};

function Controls({ meta, handleChange, visible }) {
  if (!visible) {
    return '';
  }
  let speedProps = {
    min: 100,
    max: 3000,
    defaultValue: meta.delay,
    step: 100,
    action: 'speed',
    handleChange: handleChange,
    style: { direction: 'rtl' }
  };
  let countProps = {
    min: 1,
    max: 50,
    defaultValue: meta.grid.size,
    step: 1,
    action: 'grid-size',
    handleChange: handleChange
  };
  let particleProps = {
    min: 0,
    max: 200,
    defaultValue: meta.particles.nop,
    step: 10,
    action: 'particles',
    handleChange: handleChange
  };

  return (
    <div className='controls sltd-box'>
      <div className='row'>
        <Label text='Type' />
        <div className='field'>
          <ButtonGroup
            items={['plain', 'gradient']}
            handleChange={handleChange}
            action='bg-type'
            sel={meta.mode}
          />
        </div>
      </div>

      <div className='row'>
        <Label text='Speed' />
        <div className='field'>
          <Range {...speedProps} />
        </div>
      </div>

      <div className='row'>
        <Label text='Grid' />
        <div className='field'>
          <Range {...countProps} />
        </div>
      </div>

      <div className='row'>
        <Label text='Particles' />
        <div className='field'>
          <Range {...particleProps} />
        </div>
      </div>

      <div className='row'>
        <Label text='Uniform' />
        <div className='field'>
          <input
            type='checkbox'
            defaultChecked={meta.grid.uniform}
            onChange={handleChange}
            data-action='uniform'
          />
        </div>
      </div>

      <div className='row output'>
        <Output options={meta} />
      </div>
    </div>
  );
}

export default Controls;
