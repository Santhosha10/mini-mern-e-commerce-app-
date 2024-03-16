const mongoose = require('mongoose');

const connectDatabase = () => {
    const databaseURL = process.env.MONGODB_URI;

    mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Database is connected');
        })
        .catch((err) => {
            console.error('Database connection error:', err);
        });
};

module.exports = connectDatabase;
