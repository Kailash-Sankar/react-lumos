import React from 'react';

const Label = ({ text }) => <div className='label'>{text}</div>;

const ButtonGroup = ({ items, action, handleChange, sel }) => {
  return (
    <div className='btn-group'>
      {items.map((text, i) => (
        <button
          key={i}
          data-action={action}
          onClick={handleChange}
          className={sel === text ? 'selected' : ''}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

const Range = ({
  min,
  max,
  defaultValue,
  step,
  action,
  handleChange,
  style
}) => {
  return (
    <input
      type='range'
      min={min}
      max={max}
      defaultValue={defaultValue}
      step={step}
      data-action={action}
      onChange={handleChange}
      style={style}
    />
  );
};

const Output = ({ options }) => {
  const out = JSON.stringify(options, null, 4);
  const template = '<Lumos {...options} />';
  return (
    <div>
      <pre>const options = {out}</pre>
      <pre>{template}</pre>
    </div>
  );
};

const Header = () => {
  return (
    <div className='header'>
      <div>L</div>
      <div>U</div>
      <div>M</div>
      <div>O</div>
      <div>S</div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className='footer'>
      <a href='https://github.com/Kailash-Sankar/react-lumos'>
        Kailash Sankar, April 2020
      </a>
    </div>
  );
};

export { Label, Range, ButtonGroup, Output, Header, Footer };
