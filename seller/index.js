
const express = require("express");
const bodyPraser = require("body-parser");

const server = express();
server.use(bodyPraser.json());

// Webhook -> An endpoint to receive data.
server.post("/api/notify", (req, res)=>{
    const order = req.body;
    console.log("Order received");
    console.log(order);
    res.send();
});


server.listen("4100");