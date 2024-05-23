import express from "express";
import mongoose from "mongoose";
import T from "./model/product.model.mjs";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

// create a user


try{
    mongoose.connect(process.env.DB)
    .then(()=>{
       console.log('DB connected...');
    })
    .then(()=>{
    
       const db = mongoose.connection;
       db.on('connected',() => {
           console.log('DB connected');
       })
    
       db.on('disconnected',() => {
           console.log('lost connection');
       })
    
       db.on('reconnected',()=>{
           console.log('connection restored');
       })
       
           app.listen(process.env.PORT, () => {
             console.log("...rendering on =>", process.env.PORT);
           });
    }).catch(err=>{
    
        if(err.code=="EREFUSED"){
               console.log('Error: not connected to the internet. Ensure the system is connected to the internet.');
               return;
            }
            console.log('message =>',err.message);
       })

}catch{
        console.log('the mongoose connection is faulty.');
}

  

  

  

