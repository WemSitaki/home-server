const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type SerialPort {
  path: String
  manufacturer: String
}

type RootQuery {
    serialPorts: [SerialPort]
}

schema {
    query: RootQuery
}

`);
