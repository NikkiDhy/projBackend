// import mongoose from 'mongoose'
// import {DB_NAME} from '../constants'
// import express from 'express';
import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
  path :'./env'
})
connectDB();

// const app = express();
// (async () =>{
//         try {
            
//             await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//             app.on("error",(error)=>{
//               console.log("error occured over express", error);
//               throw error;
//             })

//             app.listen(process.env.PORT, ()=>{
//               console.log(`Server is listening on port no. ${process.env.PORT}`)
//             })

//         } catch (error) {
//             console.log(error)
//             throw error
//         }
// })()



















