// const express = require('express')
// const mongoose = require('mongoose')
// const connectMongo = async() =>{
//    try {
//      await mongoose.connect('mongodb://127.0.0.1:27017/myFirst')
//       console.log('Db is connected')
//    } catch (error) {
//       console.log(error)
//    }
// }


// // create the schema
// const mySchema = new mongoose.Schema({
//    names:String,
//    description:String,
//    age:Number,
//    timeAndDate:{
//       type:Date,
//       default:Date.now
//    }
// })


// // create the model
// const userDetails = mongoose.model('users', mySchema)

// // export
// module.exports = {
//    connectMongo,
//    userDetails

// };