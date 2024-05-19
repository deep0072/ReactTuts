const express = require("express")
const {User, Account} = require("../../db")
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config");
const zod = require("zod"); //  acts very similarly to serializers in Django REST 
const { authMiddleware } = require("../../middleware");

//Framework during deserialization, providing data validation for incoming requests
const router = express.Router()
const signUpSchema = zod.object({
    username:zod.string(),
    password : zod.string(), // these are like serializer field for incoming request
    firstName:zod.string(),
    lastName:zod.string()
})
router.post("/signup" ,async (req,res)=>{
    const body = req.body
    const {success} = signUpSchema.safeParse(body)
    if (!success ){
        return res.status(411).json({
            message:"INCORRECT INPUTS"
        })
    }

    const user = await User.findOne({username:body.username})
    if (user){
        return res.status(411).json({
            message:"USER ALREADY EXISTS"
        })
    }
    const dbUser = await User.create(body)
    const userId = dbUser._id;
    await Account.create({
        userId,
        balance:1+Math.random()*1000
    })
    const token = jwt.sign({
        userId


    }, JWT_SECRET)
    res.json({
        message:"User created successfully",
        token:token
    })



})

const signingBody = zod.object({
    username: zod.string(),
    password: zod.string()
})
router.post("/signin", async (req,res)=>{
    const body = req.body
   
    const {success} =  signingBody.safeParse(body)


    if (!success) {
        return res.status(411).json({
            message:"INCORRECT REQUEST"
        })
    }

    console.log(body, "body")

    const user  = await User.findOne({
        username:body.username,
        password:body.password
    })

   

   

    console.log("password", body.password)
    if (user){
        if (body.password!= user.password){
            return res.status(403).json({
                message:"incorrect password"
            })
    
        }

    }
  
   

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

const updateBody = zod.object({
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string()
})

router.put("/", authMiddleware, async(req,res)=>{
    const body = req.body
    const {success} = updateBody.safeParse(body)
    if (!success){
        res.status(411).json({
            message:"INCORRECT REQUEST"
        })
    }

   await User.updateOne({_id:req.userId}, body) // will update first true condition
   res.status(200).json({
    message:"updated successfully"
   })
    


})

router.get( "/bulk", async(req,res)=>{
    const filter = req.query.filter || ""
    console.log("filter",filter)
    // const users = await User.find({
    //     $or: [{
    //         firstName:{
    //             "$regex":filter
    //         },
    //         lastName:{
    //             "$regex": filter
    //         }
    //     }]
    // })
     const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        },{
            lastName: {
                "$regex": filter
            }
        }
    ]
    })
   
    



    res.json({
        user: users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id


        }))
    })
    


})

// router.get("/bulk", async (req, res) => {
//     const filter = req.query.filter || "";

//     const users = await User.find({
//         $or: [{
//             firstName: {
//                 "$regex": filter
//             }
//         }, {
//             lastName: {
//                 "$regex": filter
//             }
//         }]
//     })

//     res.json({
//         user: users.map(user => ({
//             username: user.username,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             _id: user._id
//         }))
//     })
// })
module.exports = router
