const express = require("express");
const question = require("./question");
//const auth = require("./auth");

const router = express.Router();

// /api den sonra gelen sayfa için yönlendirme yapılması
router.use("/questions", question);

module.exports=router;