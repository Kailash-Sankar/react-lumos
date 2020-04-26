# react-lumos

> Animated backgrounds with react

[![NPM](https://img.shields.io/npm/v/react-lumos.svg)](https://www.npmjs.com/package/react-lumos)

## Install

```bash
npm install --save react-lumos
```

## Usage

```jsx
import React from 'react';
import Lumos from 'react-lumos';

// with defaults
function App() {
    return <Lumos />;
}

// customize
const options = {
  // delay between background transitions
  "delay": 2000,
  // "plain" or "graidient" background
  "mode": "gradient",
  // number of grids in the element
  "gridSize": 1,
  // should grids have uniform background
  "uniform": true,
  // particles animation
  "particles": {
    // number of particles
    "nop": 0,
    // particle style overrides
    "style": {}
  }
}
<Lumos {...options}>
```

## Demo

There's a working demo with dynamic settings panel which shows the options used.
[Demo](https://Kailash-Sankar.github.io/react-lumos)

## License

MIT © [Kailash-Sankar](https://github.com/Kailash-Sankar)
