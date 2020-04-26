const _rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getColor = () => {
  return `rgb(${_rand(1, 250)},${_rand(1, 250)},${_rand(1, 250)})`;
};

const getGradient = () => {
  return `linear-gradient(${getColor()}, ${getColor()})`;
};

const genParticleStyles = (nod) => {
  const style = [];
  for (let i = 0; i < nod; i++) {
    style.push({
      left: _rand(0, 100) + '%',
      top: _rand(-200, 100) + '%',
      backgroundColor: getColor()
    });
  }
  return style;
};

const typeMap = {
  plain: { key: 'backgroundColor', fn: getColor },
  gradient: { key: 'backgroundImage', fn: getGradient }
};

// factory for background gen
const bgGeneratorFn = (mode, limit = 0) => {
  const type = typeMap[mode] || typeMap['plain'];

  if (limit > 0) {
    return () => {
      let styleList = [];
      // generate a series of styles one for each box
      for (let i = 0; i < limit; i++) {
        styleList.push({ [type.key]: type.fn() });
      }
      return styleList;
    };
  }

  return () => [{ [type.key]: type.fn() }];
};

export { getColor, getGradient, genParticleStyles, bgGeneratorFn };
