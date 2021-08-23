const express = require('express');
const app = express();
const PORT = 5000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
dotenv.config();


app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use("/api/auth", authRoute);


app.listen(PORT,()=>{
    console.log("backend running at port "+PORT);
})