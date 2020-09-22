const transformDevice = device => {
  return {
    ...device._doc,
    title: device.title,
    port: device.port,
    address: device.address,
  };
};

exports.transformDevice = transformDevice;

// exports.user = user;
// exports.events = events;
// exports.singleEvent = singleEvent;
