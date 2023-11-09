const sql = require('mssql');
const sqlConfig = require('./sql.config.js');

const connectSQL = async () => {
	try {
		await sql.connect(sqlConfig);
		console.log('Connected to Azure SQL Database.');
	} catch (err) {
		console.error('Could not connect to Azure SQL Database:', err);
	}
};

// ... additional utility functions like disconnect, etc.

module.exports = connectSQL;
