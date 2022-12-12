const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors')
const path = require("path");
connectToMongo();

const app = express()
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

//Availabe routes
app.use('/api/auth', require('./routes/auth'))

//static files
app.use(express.static(path.join(__dirname, "../build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.get("/",(req, res)=>{
  res.json("server start");
 })


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})