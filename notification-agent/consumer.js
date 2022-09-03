
import  mq from "amqplib/callback_api.js";
// const fetch = require("node-fetch");
import fetch from "node-fetch";

mq.connect("amqp://localhost", (err, connection)=>{
    if(err) throw err;
    connection.createChannel((err, channel)=>{
        if(err) throw err;
        let qname = "AmazonOrder";
        channel.consume(qname, (data)=>{
            console.log("Message Recieved");
            const content = data.content.toString();
            console.log(content);
            fetch("http://localhost:4100/api/notify", {
                method:"POST",
                body: content,
                headers:{'Content-Type':'application/json'}
                
        }).then(res=> console.log("Notified to Seller"), err=>{
            console.log(err);
        })
        
        ;
        }, {noAck: true});
    })
});