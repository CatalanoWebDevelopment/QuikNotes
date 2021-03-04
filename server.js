const express = require('express');
const connectDatabase = require('./config/db');
const app = express();
const path = require('path');

// Establish Connection
connectDatabase();

// Initialize Middleware
app.use(express.json({ extended: false }));

// Define Routes


// Serve Static Assets in Production
if (process.env.NODE_ENV === 'production') {
    // Set the static folder
    app.use(express.static('client/build'));

    // Redirect all incoming requests to index.html
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ silent: true });
};

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.info(`The server has started on port: ${PORT}.`));