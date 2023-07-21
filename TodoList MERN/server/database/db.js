import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

 const Connection =()=>{

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.crxk7ca.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(MONGODB_URI,{useNewurlparser:true});

    mongoose.connection.on('connected',()=>{
        console.log('MongoDB connected');
    });
    mongoose.connection.on('disconnected',()=>{
        console.log('MongoDB disconnected');
    });
    mongoose.connection.on('error',()=>{
        console.log('MongoDB connection error',error.message);
    })
}

export default Connection;