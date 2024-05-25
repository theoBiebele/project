import mongoose from 'mongoose'
import dotenv from "dotenv"
dotenv.config();



const _MongoDB = async() => {
  
try{
    await mongoose
      .connect(process.env.DB)
      .then(() => {
        console.log("DB connected...");
      })
      .then(() => {
        const db = mongoose.connection;
        db.on("connected", () => {
          console.log("DB connected");
        });
  
        db.on("disconnected", () => {
          console.log("lost connection");
        });
  
        db.on("reconnected", () => {
          console.log("connection restored");
        });
  
       
      })
}
catch(err){
        if (err.message == 
          "querySrv ECONNREFUSED _mongodb._tcp.cluster0.ehlveac.mongodb.net") 
          {
          console.log(
            `this error indicates that the wifi connection is switched off.
             Please ensure that the wifi is switched on and try again`
          );
          return;
        }
        // else if (err.message==="querySrv EREFUSED _mongodb._tcp.cluster0.ehlveac.mongodb.net")
        console.log("There seems to be no internet connection.",err.message);
}

}

export default _MongoDB



