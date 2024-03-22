const express = require('express')
const app = express();
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose')
const { Schema, model } = mongoose
app.use(express.json())
const connectDb = async () => {
   try {
      await mongoose.connect('mongodb://127.0.0.1:27017/secondTest')
      console.log('Database is connected')
   } catch (error) {
      console.log('Db is not connected')
      console.log(error)
   }
}

// create the schema and model
const createSchema = new Schema({
   name: String,
   age: Number,
   salary: Number,
   date: {
      type: Date,
      date: Date.now
   }
})

// create the model
const createModel = new model('ourself', createSchema)


// create the data
app.post('/ourself', async (req, res) => {
   try {
      const myBro = new createModel({
         name: req.body.name,
         age: req.body.age,
         salary: req.body.salary
      })
      const saveData = await myBro.save();
      res.status(201).send(saveData)

   } catch (error) {
      res.status(500).send({ message: error.message })
   }
})


// read the data from database
app.get('/ourself', async (req, res) => {
   try {
      // const age = req.query.age
      const getData = await createModel.find();
      if (getData) {
         res.status(201).send(getData)
      }
      else {
         res.status(500).send('Product not found')
      }
   } catch (error) {
      res.status(500).send({ message: error.message })
   }
})

// get the product using by id
app.get('/ourself/:id', async (req, res) => {
   try {
      const id = req.params.id;
      const mySelf = await createModel.findOne({ _id: id })
      // const mySelf = await createModel.findOne({_id:id}).select({name:1})
      if (mySelf) {
         res.status(200).send({
            success: true,
            message: 'Successfully get the data',
            data: mySelf
         })
      }
      else {
         res.status(500).send({
            success: false,
            message: 'Product is not found'
         })
      }
   } catch (error) {
      res.status(500).send({
         message: error.message
      })
   }
})

// update the data
app.put('/ourself/:id', async (req, res) => {
   try {
      const id = req.params.id;
      const name = req.body.name;
      const age = req.body.age
      const updateData = await createModel.findByIdAndUpdate({ _id: id }, {

         $set: {
            name,
            age
         }
      },
         { new: true }
      )

      if (updateData) {
         res.status(200).send({
            success: true,
            message: 'Successfully update',
            data: updateData
         })
      }
      else {
         res.status(404).send({
            message: 'Can not find the product'
         })
      }
   } catch (error) {
      res.status(700).send({
         message: error.message
      })
   }
})

// update the data from the database
// app.put('/ourself/:id', async (req, res) =>{
//    try {
//       const id = req.params.id;
//       const updateData = await createModel.upd


//    } catch (error) {
//       res.status(700).send({
//          message:error.message
//       })
//    }
// })


// delete the data from the database
app.delete('/ourself/:id', async (req, res) => {
   try {
      const id = req.params.id;
      const deleteData = await createModel.findByIdAndDelete({ _id: id })

      if (deleteData) {
         res.status(200).send({
            message: 'Successfully deleted',
            data: deleteData
         })
      }
      else {
         res.status(400).send({
            message: 'Can not delete the data'
         })
      }
   } catch (error) {
      res.status(700).send({
         message: error.message
      })
   }
})



// crate the home page
app.get('/', (req, res) => {
   res.send('This is the home page')
})


// create the not found page
app.use((req, res) => {
   res.status(404).json({
      message: 'This is not found page'
   })
})


// export the module
module.exports = {
   app,
   port,
   hostname,
   connectDb
}


// install mongo => require mongo => connect mongoDb with express => create the schema + model => create data => read data => update data => delate data