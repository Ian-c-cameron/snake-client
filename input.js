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
  if (key === 'j') {
    serv.write("Say: You Sssssuk!");
  }
  if (key === 'k') {
    serv.write("Say: Ssssmokin!");
  }
  if (key === 'l') {
    serv.write("Say: Too Sssslow!!");
  }
  if (key === 'i') {
    serv.write("Say: Ssso Ssssad!");
  }
};

const setupInput = function(connection) {
  serv = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {setupInput};