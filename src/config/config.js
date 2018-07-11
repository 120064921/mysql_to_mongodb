exports.myConf = {
	connectionLimit : 50,
	host : '127.0.0.1',       
	user : 'root',              
	password : 'root',       
	port : '3306',                   
	database : 'taikendev', 
	multipleStatements : true 
};

exports.moConf = {
	dbUrl : 'mongodb://localhost:27017',
	db : 'taiken',
	collection : 'token_event'
};