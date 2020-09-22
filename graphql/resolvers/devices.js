const Device = require('../../models/device');
const { transformDevice } = require('./merge');


module.exports = {
  serialDevices: async () => {
        try {
            const devices = await Device.find();
            return devices.map(device => {
              return transformDevice(device);
            });
          } catch (err) {
            throw err;
          }
    },
};
