export const onConnect = (wsClient) => {
    console.log(wsClient);
    console.log('new user');

    /* template client`s messages
    {
        action: "SEND",
        senderId: 
        receiverId:
    }
    */

    wsClient.on('message', (message) => {
        // convert text message to JSON
        const jsonMessage = JSON.parse(message);
        console.log(jsonMessage)
        // switch(jsonMessage) {

        // };
    });

    wsClient.on('close', () => {
        console.log('user disconnected');
    });
}

export const onClose = () => {
    console.log('server disconnected')
};