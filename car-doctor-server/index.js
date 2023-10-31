const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const express = require('express')
let cors = require("cors");
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// MIDDLEWARE 
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
// PORT 
const port = process.env.PORT || 5000;

// VERIFY JWT TOKEN 
let verifyToken = async (req, res, next) => {
    let token = req.cookies?.token;
    if (!token) {
        return res.status(401).send({ message: "Not Authorized" })
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Not Authorized" })
        }
        req.user = decoded;
        next();
    })
}




// <!-- const verifyToken = async (req, res, next) => {
//     const token = req.cookies?.token;
//     if (!token) {
//         return res.status(401).send({ message: 'Not Authorized' })
//     }
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//         if (err) {
//             return res.status(401).send({ message: 'unauthorized access' })
//         }
//         req.user = decoded;
//         next();
//     })
// } -->


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

        // JWT 
        app.post("/jwt", (req, res) => {
            let user = req.body;
            let token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "10h" });
            res
                .cookie('token', token, {
                    httpOnly: true,
                    secure: false
                })
                .send({ success: true });
        })

        app.post("/logout", (req, res) => {
            let user = req.body;
            res
                .clearCookie("token", { maxAge: 0 })
                .send({ message: success })
        })



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
            // console.log(result);
            res.send(result);
        });
        app.post("/checkout", async (req, res) => {
            const user = req.body;
            const result = await checkOutCollection.insertOne(user);
            // console.log(result);
            res.send(result);
        });
        app.get("/checkout", verifyToken, async (req, res) => {
            const result = await checkOutCollection.find().toArray();
            res.send(result);
        });
        app.get("/checkout/:email", async (req, res) => {
            const email = req.params.email;
            const query = {
                email: email,
            };
            const result = await checkOutCollection.find(query).toArray();
            // console.log(result);
            res.send(result);
        });
        app.delete("/checkout/:id", async (req, res) => {
            const id = req.params.id;
            const query = {
                _id: new ObjectId(id),
            };
            const result = await checkOutCollection.deleteOne(query);
            // console.log(result);
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