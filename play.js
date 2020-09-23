let {connect} = require("./client");
let {setupInput} = require("./input");



console.log('Connecting ...');
let serv = connect();

setupInput(serv);


serv.on('data', (data) => {
  console.log('Server says: ', data);
  process.exit();
});
serv.on('connect', () => {
  serv.write("Name: BIG");
});