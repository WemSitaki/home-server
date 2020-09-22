const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type SerialDevice {
  port: String
  address: Int
  title: String
}

type RootQuery {
    serialDevices: [SerialDevice]
}

schema {
    query: RootQuery
}

`);
