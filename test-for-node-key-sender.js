var ks = require('node-key-sender');

function sendA() {
    console.log("sending a");
    ks.sendKey('a');
}

setTimeout(sendA, 5000);

