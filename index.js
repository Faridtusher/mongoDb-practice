const {app, port, hostname} = require('./app')
const connectDb = require('./model/connectDb')

// ren the server
app.listen(port, hostname, async () =>{
   console.log(`Your server is running in : http://${hostname}:${port}`)
   await connectDb();
})