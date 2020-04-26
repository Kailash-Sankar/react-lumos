# react-lumos

> Animated backgrounds with react

[![NPM](https://img.shields.io/npm/v/react-lumos.svg)](https://www.npmjs.com/package/react-lumos) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
  "delay": 2000, // delay between background transitions
  "mode": "gradient", // "plain" or "graidient" background
  "gridSize": 1, // number of grids in the element
  "uniform": true, // should grids be unifomr
  "particles": {
    "nop": 0, // no of particles
    "style": {} // particle style overrides
  }
}
<Lumos {...options}>
```

## License

MIT © [Kailash-Sankar](https://github.com/Kailash-Sankar)
