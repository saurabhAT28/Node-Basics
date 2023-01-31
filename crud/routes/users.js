import express from "express";

const router=express.Router();

const users=[
    {
        firstName:"Saurabh",
        lastName:"Tribhuvan",
        age:21
    }
]





// All routes starts with users
router.get('/',(req,res)=>{
    console.log(users)
    res.send(users)
});

router.post('/',(req,res)=>{
    console.log("POST ROUTES REACHED")
    const user=req.body;
    users.push(user)
    res.send(users)
});



export default router;


