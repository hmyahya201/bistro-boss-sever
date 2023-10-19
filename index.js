const express = require('express');
const cors = require("cors")
const app = express()
const port = process.env.PORT|| 3000

// midleware
app.use(cors())
app.use(express.json())

// route
app.get("/", (req, res)=>{
   res.send("the server is running")
})

app.listen(port, (req, res)=>{
   console.log(`the bistroboss is running on the port of ${port}`)
})