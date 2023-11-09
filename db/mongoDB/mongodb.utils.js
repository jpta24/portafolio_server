const mongoose = require('mongoose');
const mongodbConfig = require('./mongodb.config.js');

const connectMongoDB = async () => {
	try {
		const conn = await mongoose.connect(mongodbConfig);
		console.log(
			`Connected to Mongo! Database name: "${conn.connections[0].name}"`
		);
	} catch (error) {
		console.log('Error connecting to mongo: ', error);
		process.exit(1);
	}
};

module.exports = connectMongoDB;