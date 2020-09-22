const net = require('net');
const {IP, PORT} = require("./constants");

/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: m1t");
  });

  //"hard-coded" Move: up message to the server.
  // conn.on('connect', () => {
  //   const timer = setInterval(() => conn.write("Move: up"), 50);
  // });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', data => {
    console.log("Message from server: ", data);
  });

  return conn;
};


module.exports = {connect};