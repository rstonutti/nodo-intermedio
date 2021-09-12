require('dotenv').config();
const fetch = require('node-fetch');

const Server = require('./models/server');

const server = new Server();

server.listen();