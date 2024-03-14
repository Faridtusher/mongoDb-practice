const mongoose = require('mongoose')
const connectDb = async () =>{
   try {
      await mongoose.connect('mongodb://127.0.0.1:27017/test')
      console.log('Db is connected')
   } catch (error) {
      console.log('Db is not connected')
      console.log(error)
      process.exit(1)
   }
}



// export
module.exports = connectDb;
