let {connect} = require("./client");
let {setupInput} = require("./input");



console.log('Connecting ...');
let serv = connect();

setupInput();


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