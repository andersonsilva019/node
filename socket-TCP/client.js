/**
 * SOCKET TCP (Client)
 */

const { Socket } = require('net')

const client = new Socket();

client.connect({
  port: 4000,
  host: 'localhost'
})

client.on('connect', () => {
  console.log('Connected');
  client.write('Hello, server! Love, Client.');
})

// Recebendo dados do server TCP socket
client.on('data', (data) => {
  console.log('Mensagem do servidor: ' + data.toString('utf-8'));
  client.destroy(); // kill client after server's response
});

client.on('close', () => {
  console.log('Connection closed');
});