const express = require('express')
const app = express();
const port = 3000
const hostname = '127.0.0.1'


// crate the home page
app.get('/', (req, res) =>{
   res.send('This is the home page')
})


// create the not found page
app.use((req, res) =>{
   res.status(404).json({
      message:'This is not found page'
   })
})



// export the module
module.exports = {
   app,
   port,
   hostname
}