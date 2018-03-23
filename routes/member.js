var express = require('express');
var router = express.Router();

var connection = require('../config/db');
/* GET users listing. */


router.get('/', function(req, res, next) {
    connection.connect();

    var data;

    // 콜백으로 실행 되었기 때문에
    connection.query('SELECT * from user', function (error,results, fields) {
        if (error) throw error;
      //     console.log('The member are : ', data);
    //promise async await
    var html = '';
    html+='<ul>';
        results.forEach(element=>{
            html+='<li>' + element.userid + '</li>';
        });
    html += '</ul>';
        res.send('result : ' + html);
      });

      connection.end();
   
});

module.exports = router;
