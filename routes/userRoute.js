// const express = require('express')
// const myApp = express();
// const usersRoute = express.Router();
// const userDetails = require('../model/usersDb')


// myApp.use(express.json())
// myApp.use(express.urlencoded({extended:true}))

// usersRoute.post('/users', async (req, res) => {
//    try {
//       const myProducts = new userDetails({
      
//          description: req.body.description,
//          names: req.body.names,
//          age: req.body.age
//       })

//      const productData = await myProducts.save();

//      res.status(200).send(productData)

//    } catch (error) {
//       console.log(error)
//       res.status(500).send({message:error.message})
//    }
// })

// // export
// module.exports = usersRoute