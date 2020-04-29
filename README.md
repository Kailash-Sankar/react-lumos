# react-lumos

> Animated backgrounds with react

![npm bundle size](https://img.shields.io/bundlephobia/min/react-lumos)
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
  // set 0 for a fixed background (no transitions)
  "delay": 2000,
  // "plain" or "graidient" background color
  "mode": "gradient",
  // number of grids in the element
  "gridSize": 1,
  // should grids have uniform background
  // generates random color per vertical otherwise
  "uniform": true,
  // particles animation
  "particles": {
    // number of particles
    "nop": 0,
    // particle style override
    "style": {}
  },
  // wrapper style override
  "style" : {}
}
<Lumos {...options}>
```

## Demo

There's a working demo with a dynamic settings panel which generates options,

[https://Kailash-Sankar.github.io/react-lumos](https://Kailash-Sankar.github.io/react-lumos)

A very low quality gif preview:

![](/example/demo.gif)

## License

MIT © [Kailash-Sankar](https://github.com/Kailash-Sankar)
