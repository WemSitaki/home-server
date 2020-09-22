const transformPort = product => {
  return {
    manufacturer: product.manufacturer,
    path: product.path
  };
};

exports.transformPort = transformPort;

// exports.user = user;
// exports.events = events;
// exports.singleEvent = singleEvent;
