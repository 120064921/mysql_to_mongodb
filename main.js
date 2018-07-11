var mysqlServer = require('./src/modules/mysql_server.js');
var mongoServer = require('./src/modules/mongo_server.js');

(async ()=>{
	let data = await mysqlServer.select('SELECT * FROM tk_token_event');
	// console.log(data);

	await mongoServer.insertMany(data, function(error, docs) { 
		if(docs === null) { 
			console.log('insert error');
		} else { 
			console.log('insert success');
			// console.log(docs);
		} 
	}); 

	console.log('execute success');
	return; 
})();