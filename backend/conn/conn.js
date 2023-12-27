const mongoose =require ("mongoose");

const conn= async()=>{

    try{
        await mongoose.connect("mongodb+srv://abhishek98as:12345@cluster0.lscoojx.mongodb.net/contact").then(()=>{
            console.log("connected");
        },(error)=>{
            console.log(error)
        }
        );

    }catch(error){
        console.log(error)
    }
}

conn();