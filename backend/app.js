const express = require("express");
const cors =  require("cors");
const app=express();
const contact =require("./routes/contact")

//--------------------------------------------------------------------------
require("./conn/conn");

app.use(express.json());
app.use(cors());
app.use("/api/v1",contact)



const PORT = process.env.PORT || 1000;
app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
});

