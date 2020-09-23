let {connect} = require("./client");
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
  return stdin;
};
setupInput();


console.log('Connecting ...');
let serv = connect();

serv.on('data', (data) => {
  console.log('Server says: ', data);
});
serv.on('connect', () => {
  serv.write("Name: BIG");
  
});

setTimeout(() => {
  serv.write("Move: up");
}, 50);
setTimeout(() => {
  serv.write("Move: left");
}, 100);