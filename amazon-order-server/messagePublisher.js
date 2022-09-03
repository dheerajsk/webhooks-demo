
// Step 1: Import Queue Package.
const mq = require("amqplib/callback_api");

exports.publish = (data)=>{
// Step 2: Connect to MQ Server.
mq.connect("amqp://localhost", (err, connection)=>{
    if(err) throw err;
    // Step 3: Create channel to pass data
    connection.createChannel((err, channel)=>{
        if(err) throw err;
        let qname = "AmazonOrder";
        // Step 4: Create Q
        channel.assertQueue(qname);
        // Step 4: Send data to q
        channel.sendToQueue(qname, Buffer.from(JSON.stringify(data)));
        console.log("Message is sent for new order");
    })
})
}
