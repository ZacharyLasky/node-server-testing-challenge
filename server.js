const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', authRouter);

server.get('/', (req, res) => {
  res.status(200).json("ok")
});

module.exports = server;
