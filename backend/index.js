const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors')
connectToMongo();

const app = express()
const port = 5000;
app.use(cors())
app.use(express.json())

//Availabe routes
app.use('/api/auth', require('./routes/auth'))


app.get("/",(req, res)=>{
  res.json("server start");
 })


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})