const express = require("express");
const router = express.Router();
const User = require("../../model/User");
const auth = require("../../middleware/auth");
const Transaction = require("../../model/Transaction");
const {check, validationResult} = require("express-validator");

//@route GET api/transaction/alltransaction/:user_id
//@desc get transaction by user id
//@route Public
router.get("/getTransaction/:user_id", async (req,res)=>{
    try {
        const allTransaction = await Transaction.find({user:req.params.user_id});
        //let allTransaction = transactions.reverse();
        //console.log(allTransaction);
        if(!allTransaction || allTransaction.length == 0){
            return res.status(400).json({msg : "No transaction found for this user !!!"});
        }
        res.status(200).json(allTransaction);
    } catch (error) {
        console.error(error.message);
        if(error.kind == "ObjectId") return res.status(400).json({msg : "Transaction not found!!!"});
        res.status(500).send("server error...");
    }

})


//@route POST api/transaction/add
//@desc  add transaction
//@route Private
router.post("/add", [auth,[
    check("name","Please enter transaction item").not().isEmpty(),
    check("amount","Must be a number").isNumeric()
]
], async (req, res)=> {
    const transactionError = validationResult(req);

    if(!transactionError.isEmpty()){
        return res.status(500).json({error:transactionError.array()});
    }
    const {name, amount} =req.body
    const transactionFields = {}
    transactionFields.user = req.user.id;
    transactionFields.name = name;
    transactionFields.amount = amount;
   
    try {
        let transaction = await Transaction.findOne({user:req.user.id}); 
            transaction = new Transaction(transactionFields)
           await transaction.save();
            res.json(transaction);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error...");
    }
});


//@route Delete api/transaction/deleteTransaction
//@desc  Delete transaction
//@route Private


router.delete("/deleteTransaction", auth, async(req,res)=>{
    try {
    //remove user transaction
    console.log(req.query);
    const {name, amount} = req.query;
    const transaction = await Transaction.findOneAndRemove({ user:req.user.id, name:name , amount:amount });
    //await transaction.save();
    res.json("Transaction deleted...");    
    } catch (error) {
        console.error(error.message);
        // There is no such profile to delete
        res.status(500).json({msg: "There is no such profile to delete"});
    }

});


module.exports = router;