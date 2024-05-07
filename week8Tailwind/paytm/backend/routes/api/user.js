const express = require("express")
const {User} = require("../../db")
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const zod = require("zod") //  acts very similarly to serializers in Django REST 
//Framework during deserialization, providing data validation for incoming requests
const router = express.Router()
const signUpSchema = zod.object({
    username:zod.string(),
    password : zod.string(), // these are like serializer field for incoming request
    firstName:zod.string(),
    lastName:zod.string()
})
router.post("/signup" ,async (res,req)=>{
    const body = req.body
    const success = signUpSchema.safeParse(body)
    if (!success ){
        return res.status(411).json({
            message:"INCORRECT INPUTS"
        })
    }

    const user = await User.findOne({username:body.username})
    if (user._id){
        return res.status(411).json({
            message:"USER ALREADY EXISTS"
        })
    }
    const dbUser = await User.create(body)
    const userId = dbUser._id;
    const token = jwt.sign({
        userId


    }, JWT_SECRET)
    res.json({
        message:"User created successfully",
        token:token
    })



})


router.post("/signin", async (res,req)=>{
    const body = req.body
    const signingBody = zod.object({
        username: zod.string(),
        password: zod.string()
    })
    const success =  signingBody.safeParse(body)

    if (!success) {
        return res.status(411).json({
            message:"INCORRECT REQUEST"
        })
    }

    const user  = User.findOne({
        username:body.username,
        password:body.password
    })

    if (user) {
        const token = jwt.sign({
            userId:user._id
        },JWT_SECRET)
        res.json({
            token:token
        })
        return
    }
    res.status(411).json({
        message:"ERROR WHILE LOGGING IN"
    })

  

})
module.exports = router
