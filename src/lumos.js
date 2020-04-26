import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { bgGeneratorFn, genParticleStyles } from './utils';
import { StageWrapper } from './styles';

// horizontal divider
function RenderDivider({ size }) {
  console.log('divider');
  const d = [];
  for (let j = 0; j < size; j++) {
    d.push(<div key={j} className='divider' />);
  }
  return d;
}
const MemoizedDivider = React.memo(RenderDivider);

// display element
function renderElements({ bgStyles, grid }) {
  const elements = [];
  const sl = bgStyles.length;
  for (let i = 0; i < grid.size; i++) {
    elements.push(
      <div key={i} className='stage' style={bgStyles[i % sl]}>
        <MemoizedDivider size={grid.size} />
      </div>
    );
  }
  return elements;
}

// particles
function Particles({ nop = 0, style = {} }) {
  const parts = [];
  const styleList = genParticleStyles(nop);
  for (let i = 0; i < nop; i++) {
    parts.push(
      <div
        className='particles'
        key={i}
        style={{ ...styleList[i], ...style }}
      />
    );
  }
  return parts;
}

// memoize
const MemoizedParticles = React.memo(Particles);

// wrapper element
function Lumos({ style, delay, mode, grid, particles }) {
  const [bgStyles, setBgStyles] = useState([
    { backgroundColor: '#333', backgroundImage: 'none' }
  ]);

  // register animation interval
  useEffect(() => {
    // color limits
    const limit = grid.uniform ? 0 : grid.size;
    const generateBg = bgGeneratorFn(mode, limit);
    const interval = setInterval(() => setBgStyles(generateBg), delay);
    return () => {
      clearInterval(interval);
    };
  }, [delay, mode, grid]);

  return (
    <StageWrapper style={style}>
      {renderElements({ bgStyles, grid })}
      <div>
        <MemoizedParticles {...particles} />
      </div>
    </StageWrapper>
  );
}

Lumos.propTypes = {
  style: PropTypes.object,
  delay: PropTypes.number,
  mode: PropTypes.string,
  grid: PropTypes.object,
  uniform: PropTypes.bool,
  particles: PropTypes.object
};

Lumos.defaultProps = {
  style: {},
  delay: 2000,
  mode: 'gradient',
  grid: { size: 1, uniform: true },
  particles: { nop: 0, style: [] }
};

export default Lumos;
