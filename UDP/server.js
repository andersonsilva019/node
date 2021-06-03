const { createSocket } = require('dgram');

// Criando servidor UDP
const server = createSocket('udp4');

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

const message = Buffer.from('Hello cliént')
// Recebo a mensagem do cliente
server.on('message', (msg, info) => {
  console.log(`Received message from client: ${msg.toString('utf-8')} from ${info.address}:${info.port}`);
  console.log(`Received: ${info.size} bytes ${info.address}:${info.port}`)

  setTimeout(() => {
    server.send(message, info.port, 'localhost', (error) => {
      if (error) {
        server.close();
      } else {
        console.log('Message sent to client!');
      }
    })
  }, 2000)
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(4000);
// Prints: server listening 0.0.0.0:4000