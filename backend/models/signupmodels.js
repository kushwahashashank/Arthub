const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');
const signUpTemplate = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
  basket:{
    type:Array,
  }
  
},
{
  timestamps: true,
}
 
);

signUpTemplate.pre("save",async function (next){
  if(!this.isModified("password")){
    next();
  }

  const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password , salt);
});
signUpTemplate.methods.matchPassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password )
}
const User = mongoose.model("User",signUpTemplate)
// module.exports = mongoose.model("signupdata", signUpTemplate);
module.exports = User;
