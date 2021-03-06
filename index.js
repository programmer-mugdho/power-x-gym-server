const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://powerXuser:L055KJ2BfcTvB0dh@cluster0.yf6o8.mongodb.net/powerXGym?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const port = 5000;

app.use(cors())
app.use(bodyParser.json())

// mongoDB
//ourTarget ,chooseUs

client.connect(err => {
    const ourTargetCollection = client.db("powerXGym").collection("ourTarget");
    const chooseUsCollection = client.db("powerXGym").collection("chooseUs");
    const ourClassesCollection = client.db("powerXGym").collection("ourClasses");
    const paymentCollection = client.db("powerXGym").collection("payment");


    app.get('/', (req, res) => {
        res.send('<h1>Power X Gym Server</h1>')
    })

    app.get('/targets', (req, res) => {
        ourTargetCollection.find({})
            .toArray((err, documents) => {
                res.send(documents)
            })
    })

    app.get('/chooseUs', (req, res) => {
        chooseUsCollection.find({})
            .toArray((err, documents) => {
                res.send(documents)
            })
    })

    app.get('/classes', (req, res) => {
        ourClassesCollection.find({})
            .toArray((err, documents) => {
                res.send(documents)
            })
    })

    app.post('/payment', (req, res) => {
        data = req.body
        paymentCollection.insertOne({ data })
            .then(result => res.send(result.insertedCount > 0))
    })
    console.log('Database Connected');
});

app.listen(process.env.PORT || port, console.log('Listening on port 5000'));

// username = "powerXuser"
// userPass = "L055KJ2BfcTvB0dh"
// programmer.mugdho@gmail.com
