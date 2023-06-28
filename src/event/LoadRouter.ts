/*import amqp from "amqplib";
import express from "express";

const config = {
  protocol: "amqp",
  hostname: "34.235.104.181",
  port: 5672,
  username: "guest",
  password: "guest",
};

export const loadRouter = express.Router();

loadRouter.get("/", async function loadEvent(req, res) {
  const conn = await amqp.connect(config);
  console.log("Conexión exitosa");
  const channel = await conn.createChannel();
  console.log("Canal creado exitosamente");
  await channel.sendToQueue("InitialEvent", Buffer.from("Mensaje"));
  console.log("Mensaje enviado");
  await channel.close();
  await conn.close();
  res.status(200).send("OK");
});*/


/*import amqp from "amqplib";
import express from "express";

export const loadRouter = express.Router();
const rabbitSettings = {
  protocol: "amqp",
  hostname: "0.0.0.0",
  port: 5672,
  username: "guest",
  password: "guest",
};
async function connect() {
    const queue = "InitialEvent"
    try {
        const conn = await amqp.connect(rabbitSettings);
        console.log('Conexión exitosa')
        const channel = await conn.createChannel()
        console.log ("Canal creado exitosamente en consumidor")

        channel.consume(queue, (msn:any)=> {
          const contenido =  msn.content.toString();
          const objetoRecibido = JSON.parse(contenido);

            console.log(objetoRecibido)
            //console.log(msn.content.toString());
            channel.ack(msn)
        })
        
    } catch (error) {
        console.error('Error => ', error)    
    }
}

connect();*/
