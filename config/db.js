var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '18.220.165.29',
    user     : 'devuser',
    password : 'devpass',
    database : 'devdb'
  });
  module.exports = connection;