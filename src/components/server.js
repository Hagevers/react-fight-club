var express = require('express');
var app = express();
app.get('/', function (req, res) {
    var sql = require("mssql");
    var config = {
        user: 'AmitHagever',
        password: 'Hagever',
        server: 'localhost',
        database: 'fightclub',
        options: {
          trustServerCertificate: true
        }
      }
      sql.connect(config, function (err) {

          if (err) console.log(err);
          var request = new sql.Request();
          request.query('select * from pmmbrs', function (err, recordset) {
          //    if (err) console.log(err)
              res.send(recordset);
            console.log('Amit');
          });
      });
  });
var server = app.listen(5000, function () {
    console.log('Server is running..');
});
