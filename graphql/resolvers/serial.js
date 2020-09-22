const SerialPort = require('serialport')
const bindings = require('@serialport/bindings')
const { transformPort } = require('./merge');
const Readline = require('@serialport/parser-readline')


var listOfPorts = [];
var ports = []

//called automatically by bindings.list()
function list(ports) {
    listOfPorts = ports;
}

function serialMessage(data) {
    var msg = data.message.split(" ")
    msg[1] =  parseInt(msg[1])
    msg[1] -= 1
    msg[2] =  parseInt(msg[2]) 
     if(msg[1] != 99 && msg[2] == '0'){
         console.log(msg[1])
         daliToggle('/dev/ttyACM1', msg[1])
     }
 }


module.exports = {
    serialPorts: async () => {
        try {
            await bindings.list().then(list, err => {
                process.exit(1)
            })



            return listOfPorts


        } catch (err) {
            throw err;
        }
    },
};
