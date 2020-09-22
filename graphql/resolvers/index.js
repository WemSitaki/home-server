const devicesResolver = require('./devices');

const rootResolver = {
  ...devicesResolver,
};

module.exports = rootResolver;
