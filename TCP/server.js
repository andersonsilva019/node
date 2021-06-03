/**
 * SOCKET TCP (Server)
 */

const { createServer } = require('net');

const PORT = 4000
const HOST = 'localhost'

const server = createServer();

server.on('connection', (socket) => {

  console.log('Um novo cliente foi conectado!')

  // Obtendo a quantidade de conexoes com o servidor
  server.getConnections((err, count) => {
    console.log('Total de clientes conectados: ' + count)
  })

  // Recebendo dados do client socket TCP
  socket.on('data', (data) => {
    console.log(`Mensagem do cliente: ${data}`)
    // Enviando dados para o client
    socket.write('Sua mensagem chegou!!: ' + data);
  })
})

server.maxConnections = 2

server.listen(PORT, HOST);