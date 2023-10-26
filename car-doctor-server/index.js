const express = require('express')
let cors = require("cors");
const app = express()
// MIDDLEWARE 
app.use(cors());
app.use(express.json());
// PORT 
const port = 5000



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})