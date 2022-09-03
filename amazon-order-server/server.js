

// 1. Import Express - to create server and api.
const express = require("express");
const bodyParser = require("body-parser");
const publisher = require("./messagePublisher");

// 2. Create Server
const server = express();
server.use(bodyParser.json());

// 3. Listen for the services.
server.listen(4000);

// 4. Create Order api.
// Synchronous.
server.post("/api/order", (req, res)=>{
    const order = req.body;
    console.log(order);
    publisher.publish(order);
    res.send("Order placed");
});


server.get("/", (req, res)=>{
    res.end("Welcome to Amazon Order Services");
})

console.log("Server is listening on 4000");