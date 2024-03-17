const {app, port, hostname} = require('./app')
const {connectDb} = require('./app')

// ren the server
app.listen(port, hostname, async () =>{
   console.log(`Your server is running in : http://${hostname}:${port}`)
   await connectDb();
})