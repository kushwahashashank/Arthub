const asyncHandler = require('express-async-handler');
const User = require('../models/signupmodels');
const generateToken = require('../utils/generatetoken');

const registerUser =asyncHandler(async (req,res) =>{
const {fname,lname,email,password }=req.body;

const userExists= await User.findOne({email});


if(userExists){
    res.status(400);
    throw new Error ("User already Exists")
}
 
const user = await User.create({
    fname,
    lname,
    email,
    password,

});

if(user){
    res.status(201).json({
        _id: user._id,
        fname:user.fname,
        lname:user.lname,
        email:user.email,

        token:generateToken(user._id)
    })
}

else{
    res.status(400)
    throw new Error ('Error Occured')
}



  
// res.json({
//     fname,
//     email
// })


});



const authUser =asyncHandler(async (req,res) =>{
    const {email,password }=req.body;
    const user = await  User.findOne({email});
    
    if(user && (await user.matchPassword(password))){
      console.log(req.body);
      return res.json({
        _id: user._id,
        fname:user.fname,
        lname:user.lname,
        email:user.email,
        token:generateToken(user._id)
      })
  }
  else{
    res.status(400)
    throw new Error ('Invalid email or password')
}

  
})
module.exports = {registerUser,authUser}