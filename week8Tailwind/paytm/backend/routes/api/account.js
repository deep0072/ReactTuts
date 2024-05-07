const express = require("express");
const { default: mongoose } = require("mongoose");
const { Account } = require("../../db");
const { authMiddleware } = require("../../middleware");
const router = express.Router();

router.get("/balance", authMiddleware, async (req,res)=>{
    const account = req.userId
    if (account){
        const user = await Account.findOne({
            userId:account.userId
        })

        res.json({
            "balance":user.balance
        })

    }
})

router.post("/transfer",authMiddleware,async (req,res)=>{
    //first create session for atomicity
    // atomicity is used to keep data consistent in db
    const session = await mongoose.startSession()
    // start transaction
    session.startTransaction()
    const {amount,to} = req.body

    //fetch the account withing txn
        // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount){
        await session.abortTransaction()
        return res.json({
            message: "Insufficient balance"

        })
    }

    const toAccount =  await Account.findOne({userId:to}).session(session)

    if (!toAccount){
        await session.abortTransaction()
        return res.json({
            message:"Invalid account"
        })
    }

    await Account.updateOne({userId:req.userId}, {$inc:{balance:-amount}}).session(session)
    await Account.updateOne({userId:to}, {$inc:{balance:amount}}).session(session)
    await session.commitTransaction();
    res.json({
        message:"Transfer successful"
    })


})

module.exports = router