require('dotenv').config();
const express = require('express');
const addRoutes = require('./route');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

addRoutes(app);

app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    res.status(404).json({
        error: 'Not found',
        method: req.method,
        path: req.originalUrl
    });
});

var server = app.listen(process.env.PORT || 3000, function () { 
    console.log(`Server running on http://localhost:${process.env.PORT}`);// Konzolra kiír egy üzenetet, hogy a szerver fut és melyik porton érhető el.
});