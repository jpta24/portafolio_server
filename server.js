const app = require('./app');

const connectDB = require('./db/index');

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 5008
const PORT = process.env.PORT || 5008;

connectDB().then(() => {
	app.listen(PORT, () => {
		console.log(`Server listening on http://localhost:${PORT}`);
	});
});
