/*
- Monitoring activity on all ports and send massage to next processing
- update device ping time and device table 
*/

const SerialPort = require('serialport')
const bindings = require('@serialport/bindings')
const Readline = require('@serialport/parser-readline')
const Device = require('../models/devices');
var mongoose = require('mongoose');

var listOfPorts = [];
var ports = [];

function list(ports) {
    listOfPorts = ports;
}

async function devices(port, address, title){
    var pingTime = new Date()
   const devices = await Device.findOneAndUpdate({port: port, address: address})
    if(!devices){
        const newDevice = new Device({
            title: title,
            address: address,
            port: port,
            lastPing: pingTime
        })
        const result = await newDevice.save();
    }
}

module.exports = {
    serialMonit: async () => {
        await bindings.list().then(list, err => {
            process.exit(1)
        })
        listOfPorts.forEach((port, index) => {
            ports[index] = new SerialPort(port.path, {
                baudRate: 115200,
                autoOpen: true,
                flowControl: false
            })
            const parser = ports[index].pipe(new Readline())

            parser.on('data', function (data) {
                var msg = data.split(" ")
                msg[0] = parseInt(msg[0])
                msg[1] = parseInt(msg[1])
                if (msg[1] == 99) {
                    devices(port.path, msg[0], msg[2])
                } else {
                    // action

                }
                
            })
        })
    }
}
