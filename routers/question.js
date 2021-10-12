const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const { getData, getAllQuestions } = require("../controllers/question");
const { Employee } = require("../models/employee");

router.get("/", getData);

module.exports = router;
