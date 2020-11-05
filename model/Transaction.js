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
        type:String
    } 
})

module.exports = Transaction = mongoose.model("transaction", TransactionSchema);
