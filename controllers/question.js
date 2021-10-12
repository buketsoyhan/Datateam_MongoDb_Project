const User = require("../models/User");
const mongoose = require("mongoose");
const axios = require("axios");
const db = mongoose.connection;

const url = "mongodb+srv://buket:123@cluster0.frtug.mongodb.net/cluster0";

const getAllQuestions = (req, res, next) => {
  res.status(200).json({
    success: true,
  });
};

const getData = async (req, res, next) => {
  const users = await User.find().exec();
  res.status(200).json({
    status: "success",

    data: {
      data: users,
    },
  });
};

module.exports = {
  getAllQuestions,
  getData,
};
