const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Activate config
dotenv.config();

const database = process.env.MONGO_DB_URI;

const connectDatabase = async () => {
    try {
        await mongoose.connect(database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.info('MongoDB has connected.');
    } catch(error) {
        console.error(error.message);
        process.exit(1);
    };
};

module.exports = connectDatabase;