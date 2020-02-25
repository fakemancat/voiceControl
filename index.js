const WebSocket = require('ws');
const express = require('express');
const nks = require('node-key-sender');

// server
const app = express();

app.get('/', (_, res) => (
    res.sendFile(`${__dirname}/html/index.html`)
));

app.listen(8080);

// sockets & functional
const delay = ms => new Promise(res => setTimeout(res, ms));

const server = new WebSocket.Server({
    port: 3000
});

server.on('connection', (socket) => {
    console.log('connected');

    socket.onmessage = (message) => {
        switch (message.data) {
            case 'вверх':
                nks.sendKey('up');
                break;
            case 'вниз':
                nks.sendKey('down');
                break;
            case 'влево':
                nks.sendKey('left');
                break;
            case 'вправо':
                nks.sendKey('right');
                break;
        }
    }
});