/* eslint-disable no-console */
/* eslint-disable no-undef */
//import app from "./app";


//import app from './app';
const app = require('./app');
const http = require('http');

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT,()=> console.log(`listening on port ${PORT}...`));