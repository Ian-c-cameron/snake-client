/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
let serv; //the connection to the server

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    serv.write("Move: up");
  }
  if (key === 's') {
    serv.write("Move: down");
  }
  if (key === 'd') {
    serv.write("Move: right");
  }
  if (key === 'a') {
    serv.write("Move: left");
  }
};

const setupInput = function(connection) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  serv = connection;
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {setupInput};