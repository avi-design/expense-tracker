const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String
    },
    amount:{
        type:Number
    } 
})

module.exports = Transaction = mongoose.model("transaction", TransactionSchema);
