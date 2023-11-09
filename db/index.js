// const mongoose = require('mongoose');

// const MONGO_URI =
// 	process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portafolio';

// const connectDB = async () => {
// 	try {
// 		const conn = await mongoose.connect(MONGO_URI);
// 		console.log(
// 			`Connected to Mongo! Database name: "${conn.connections[0].name}"`
// 		);
// 	} catch (error) {
// 		console.log('Error connecting to mongo: ', error);
// 		process.exit(1);
// 	}
// };

// module.exports = connectDB;

const connectMongoDB = require('./mongoDB/mongodb.utils');
const connectSQL = require('./sql/sql.utils');

const connectDBs = async () => {
	await connectMongoDB();
	await connectSQL();
};

module.exports = {
	connectDBs,
};
