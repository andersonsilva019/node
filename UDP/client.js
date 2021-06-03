const { createSocket } = require('dgram');

const client = createSocket('udp4');  // IPv4

const PORT = 4000
const HOST = 'localhost'

const message = Buffer.from('Hello server')

client.connect(PORT, HOST, (err) => {
  console.log('Cliente se conectou com o servidor e sua mensagem será enviada!')
});

setTimeout(() => {
  client.send(message, () => {
    console.log(`Message sent to server: ${message.toString('utf-8')}`)
    console.log('Await return...')
  });
}, 2000)

client.on('message', function (msg, info) {
  console.log(`Received message from server : ${msg.toString('utf-8')}`);
  console.log(`Received ${msg.length} bytes from ${info.address}:${info.port}`);
  client.close()
});
