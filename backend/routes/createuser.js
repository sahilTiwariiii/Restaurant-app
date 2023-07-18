const express=require('express')
const jwt = require('jsonwebtoken');
const bcrypt=require('bcryptjs')
const router=express.Router()
const jwtSecret="madhubalahokyakimadhushalahokisathiltiwariihokiviratkohlihokyahayayayayyay"
const User=require('../models/User')
const { body, validationResult } = require('express-validator');
router.post('/createuser',[
body('email').isEmail(),
// password must be at least 5 chars long
body('name',"Name should minimum 3 characters").isLength({ min: 3 }),
body('password',"Your password must be at least 5 chatacters").isLength({ min: 5 })]
,async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
try {
  const salt=await bcrypt.genSalt(10)
  let secpassword=await bcrypt.hash(req.body.password,salt)
  await  User.create({
        name:req.body.name,
        password:secpassword,
        email:req.body.email,
        location:req.body.location
    })
    res.json({success:true})
} catch (error) {
  console.log(error)  
  res.json({success:false})
}
})
router.post('/loginuser',async(req,res)=>{
    let email=req.body.email
  try {
   let userdata= await  User.findOne({email})
   if(!userdata){
    return res.status(400).json({ errors:"Try logging with correct Credentials"});
   }
   const pasCompare= await bcrypt.compare(req.body.password,userdata.password)
if(!pasCompare){
  return res.status(400).json({ errors:"Try logging with correct Credentials"});
}
const data={
  user:{
    id:userdata.id
  }
}
const authtoken=jwt.sign(data,jwtSecret)
  return res.json({success:true,authtoken:authtoken});

      res.json({success:true})
  } catch (error) {
    console.log(error)  
    res.json({success:false})
  }
  })
module.exports=router