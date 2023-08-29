const mongoose = require('mongoose');
const Dotenv = require('dotenv');
Dotenv.config({ silent: true });

const database = process.env.DB_NAME;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://${host}:${port}/${database}`)
        console.log("MongoDB connected");
    }
    catch(error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;