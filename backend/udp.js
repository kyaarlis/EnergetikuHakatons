const UDP = require('dgram')
const client = UDP.createSocket('udp4')
const { networkInterfaces } = require('os');
const nets = networkInterfaces();

const toogleLightState = require('../src/lightStateUtils');

const PORT = 5555;
const key = '123';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port2 = 3000;

app.use(bodyParser.json());


app.post('/data', (req, res) => {
    const toogleState = req.body.toogleState;

    const results = Object.create(null);

    for (const name of Object.keys(nets)) {
      for (const net of nets[name]) {
        // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
        if (net.family === familyV4Value && !net.internal) {
          if (!results[name]) {
            results[name] = [];
          }
          results[name].push(net.address);
        }
      }
    }
    devIP = results['Wi-Fi'][0];
    console.log('results', devIP);

    console.log(`Light State: ${toogleLightState(toogleState)}`);

    const packet = Buffer.from(toogleLightState(toogleState))

    client.send(packet, PORT, '192.168.185.135', (err) => {
        if (err) {
            console.error('Failed to send packet !!')
        } else {
            console.log('Packet send !!')
        }
    })
});

app.listen(port2, () => {
    console.log(`Server is running on port ${port2}`);
});
  

