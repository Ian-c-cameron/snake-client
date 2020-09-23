let {connect} = require("./client");


console.log('Connecting ...');
let serv = connect();

serv.on('data', (data) => {
  console.log('Server says: ', data);
});
