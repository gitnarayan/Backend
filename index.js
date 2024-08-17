require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/fb", (req, res) => {
  res.send("ai!");
});


app.get("/login", (req, res)=>{
    res.send('<h1>please login</h1>');
})


app.get("/tesla", (req,res)=>{
    res.send('<h2> my favroute car </h2>');
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
