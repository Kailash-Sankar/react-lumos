import React from 'react';
import Lumos from 'react-lumos';

import Controls, { ToggleControls } from './Controls';
import { Header, Footer } from './Components';

const App = () => {
  const [delay, setDelay] = React.useState(2000);
  const [mode, setMode] = React.useState('gradient');
  const [grid, setGrid] = React.useState({ size: 1, uniform: true });
  const [particles, setParticles] = React.useState({ nop: 0, style: {} });

  const [showControls, setShowControls] = React.useState(false);

  // todo: use reducer
  const handleChange = (event) => {
    let ele = event.target;
    //console.log({ value: ele.value, action: ele.dataset.action });

    switch (ele.dataset.action) {
      case 'delay':
        setDelay(parseInt(ele.value, 10));
        break;
      case 'bg-type':
        setMode(ele.textContent);
        break;
      case 'grid-size':
        setGrid({ ...grid, size: parseInt(ele.value) });
        break;
      case 'uniform':
        setGrid({ ...grid, uniform: ele.checked });
        break;
      case 'toggle-ctrl':
        setShowControls(!showControls);
        break;
      case 'particles':
        let nop = parseInt(ele.value);
        setParticles({ nop: nop, style: {} });
        break;
      default:
        console.log('sup', ele.dataset);
    }
  };

  const options = {
    delay,
    mode,
    grid,
    particles
  };

  //console.log('options', options);

  return (
    <div>
      <div>
        <Header />
        <ToggleControls handleChange={handleChange} />
        <Controls
          handleChange={handleChange}
          meta={options}
          visible={showControls}
        />
      </div>

      <div style={{ width: '100%', height: '100%' }}>
        <Lumos {...options} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
