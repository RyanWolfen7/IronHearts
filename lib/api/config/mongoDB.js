import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

const MongoClientPromise = async() => {
    console.log('Connecting to MongoDB...');
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
    const db = client.db('iron_hearts');
    return db;
}

export default MongoClientPromise
