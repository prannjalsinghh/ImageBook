const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.f1ag36g.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri, () => console.log('connected'));

app.use('/', require('./Routes/appRouter'))

app.get('/', (req, res) => {
    res.send('Hello from ImageBook server side!');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})