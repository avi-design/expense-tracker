const moongoose = require("mongoose");
const config =require("config");
const db = config.get("mongoURI");

const connectDb = async()=>{
    try {
    await moongoose.connect(db,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex:true,
        useFindAndModify:false
    });
    
    console.log("mongoDB conncted....");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDb;
