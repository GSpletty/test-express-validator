const express = require('express');
const { query } = require('express-validator');

const app = express();

app.get('/test',
    query('bool').toBoolean(false),
    async (req, res) => {
        console.log(req.query.bool);
        console.log(typeof req.query.bool);
        res.status(200).send();
    });

app.listen(8090);