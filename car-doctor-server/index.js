const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const express = require('express')
let cors = require("cors");
const app = express()
// MIDDLEWARE 
app.use(cors());
app.use(express.json());
// PORT 
const port = process.env.PORT || 5000;

// MONGODB 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ruhvmdy.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // API ENDPOINTS 
        const serviceCollection = client.db("CarDoctorDB").collection("services");
        const checkOutCollection = client.db("CarDoctorDB").collection("checkout");

        app.get("/services", async (req, res) => {
            const result = await serviceCollection.find().toArray();
            res.send(result);
        });
        app.get("/services/:id", async (req, res) => {
            const id = req.params.id;
            const query = {
                _id: new ObjectId(id),
            };
            const result = await serviceCollection.findOne(query);
            console.log(result);
            res.send(result);
        });
        app.post("/checkout", async (req, res) => {
            const user = req.body;
            const result = await checkOutCollection.insertOne(user);
            console.log(result);
            res.send(result);
        });
        app.get("/checkout", async (req, res) => {
            const result = await checkOutCollection.find().toArray();
            res.send(result);
        });
        app.get("/checkout/:email", async (req, res) => {
            const email = req.params.email;
            const query = {
                email: email,
            };
            const result = await checkOutCollection.find(query).toArray();
            console.log(result);
            res.send(result);
        });
        app.delete("/checkout/:id", async (req, res) => {
            const id = req.params.id;
            const query = {
                _id: new ObjectId(id),
            };
            const result = await checkOutCollection.deleteOne(query);
            console.log(result);
            res.send(result);
        });






    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})