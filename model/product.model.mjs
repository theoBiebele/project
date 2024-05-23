import mongoose from 'mongoose'


const tSchema = new mongoose.Schema({
    name : {
        type:String,
        unique:true,
        require:true,
    },
    password :{
        type:String,
        require:true,
    },
});

const T = mongoose.model( 'T' , tSchema );

export default tSchema