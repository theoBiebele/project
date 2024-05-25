//modules
import express from "express";
import mongoose from "mongoose";

//pages
import _MongoDB from "./connection/db.connection.mjs";
import T from "./model/product.model.mjs";
const app = express();
app.use(express.json());

//middleware function
const connectionTime = (req, res, next) => {
  req.cTime = Date.now();
  next();
};

const time = (req, res, nextInLine) => {
  const tNow = new Date();
  const timest = [tNow.getHours(),tNow.getMinutes()]

  const hours = timest[0];
  const minutes = timest[1];

    (hours>=12)?console.log(`Time: ${hours}:${minutes} pm`):console.log(`Time: ${hours}:${minutes} am`);
    (minutes<10)?minutes==='0'+minutes:minutes;
  
  nextInLine();
};



const payLoad = (req, res, next) => {
console.log(typeof res);
console.log();
  next();
};


//executing the middleware function
app.use(payLoad);
app.use(time);
// app.use(products);


//route handlers
app.get("/test", (req, res) => {
  res.send("this is a middleware");
});

app.get("/api/users", (req, res, moveOn) => {
  res.json({
    message: "work in progress",
  });
  console.log("user info...");
});

app.get("/api/product", (req, res, moveOn) => {
  res.json({
    message: "work in progress",
  });
  console.log("our products are nice");
});



_MongoDB().then(()=>{
  
  app.listen(process.env.PORT, () => {
    console.log("...rendering on =>", process.env.PORT);
  });
})