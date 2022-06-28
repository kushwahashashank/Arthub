const express = require("express");
const { registerUser, authUser } = require("../Controller/usercontols");
const router = express.Router()

// const signUpTemplateCopy = require('../models/signupmodels')
router.route("/").post(
//     '/signup',(request , response)=>{
//     const signedUpUser = new signUpTemplateCopy({
//        fname:request.body.fname,
//        lname:request.body.lname,
//        email:request.body.email,
//        password:request.body.password
//     })
//     signedUpUser.save()
//     .then(data =>{
//         response.json(data)
//     })
//     .catch(error =>{
//         response.json(error)
//     } )
// }
registerUser
);
router.route("/login").post(authUser);


module.exports  = router;