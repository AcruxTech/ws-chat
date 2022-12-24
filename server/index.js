import { WebSocketServer } from 'ws';
import { onConnect, onClose } from './handlers.js'

const port = 9090;

const wsServer = new WebSocketServer({
    port: port,
});

wsServer.on('connection', onConnect);
wsServer.on('close', onClose);

console.log(`Successfully started at ws://localhost:${port}`);