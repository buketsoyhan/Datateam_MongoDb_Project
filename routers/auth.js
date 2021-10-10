const express = require("express");
const {register, checkPassword} =require('../controllers/auth')
//const {checkPassword} =require('../controllers/auth')
const router = express.Router();


router.post("/",register);


module.exports=router;


