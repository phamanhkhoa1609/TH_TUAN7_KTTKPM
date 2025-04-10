const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;
const MONGO_URL = 'mongodb://mongo:27017';
const DB_NAME = 'demo';

app.get('/', async(req, res) => {
    const client = new MongoClient(MONGO_URL);
    try {
        await client.connect();
        const db = client.db(DB_NAME);
        const collection = db.collection('test');
        await collection.insertOne({ message: 'Xin chào từ Node.js + MongoDB' });
        const data = await collection.find().toArray();
        res.json(data);
    } catch (err) {
        res.status(500).send(err.message);
    } finally {
        await client.close();
    }
});

app.listen(PORT, () => {
    console.log(`Server chạy tại http://localhost:${PORT}`);
});