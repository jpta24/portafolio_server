const sqlConfig = {
	user: process.env.SQL_USER,
	password: process.env.SQL_PASSWORD,
	database: process.env.SQL_DATABASE,
	server: process.env.SQL_SERVER,
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000,
	},
	options: {
		encrypt: true, // For Azure SQL, this must be set to true
		trustServerCertificate: false, // Change to true if you have issues with certificate
	},
};

module.exports = sqlConfig;
