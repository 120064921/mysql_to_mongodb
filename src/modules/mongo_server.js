const MongoClient = require('mongodb').MongoClient; 
const config  = require( '../config/config.js' );

function connectDb(callback) { 
	MongoClient.connect(config.moConf.dbUrl,function(err,db){ 
		if(err) {
			 console.log('数据库连接失败'); 
		 return;
		} callback(db); 
		db.close(); 
	})
} 
config.moConf.db
config.moConf.collection
exports.findOne = function(json,callback){
	connectDb(function(db) { 
		const DB = db.db(config.moConf.db); 
		const collection = DB.collection(config.moConf.collection); 
		var result = collection.findOne(json,null,callback); 
	}); 
} 
exports.find = function(json,callback) { 
	connectDb(function(db) { 
		const DB = db.db(config.moConf.db); 
		const collection = DB.collection(config.moConf.collection); 
		var result = collection.find(json).toArray(callback); 
	}); 
} 
exports.insertOne = function(json,callback){ 
	connectDb(function(db) { 
		const DB = db.db(config.moConf.db); 
		const collection = DB.collection(config.moConf.collection); collection.insertOne(json,callback) 
	}) 
}
exports.insertMany = function(json,callback){ 
	connectDb(function(db) { 
		const DB = db.db(config.moConf.db); 
		const collection = DB.collection(config.moConf.collection); collection.insertMany(json,callback) 
	}) 
}

//more...