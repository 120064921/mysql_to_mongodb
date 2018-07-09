var mysql = require('mysql');

var connection = mysql.createConnection({     
  host     : '127.0.0.1',       
  user     : 'root',              
  password : 'root',       
  port: '3306',                   
  database: 'test', 
}); 
 
connection.connect();
 
var  sql = 'SELECT * FROM users';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();