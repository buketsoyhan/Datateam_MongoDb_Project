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

  // ** User tablosuna yeni kişi ekleme **
  //await User.create({name:'Aslı2', password:'vndsvkjsdvdskkls', email:'aslik@gmail.com'})

  // ** İsme göre bulma **
  // User.find({ name: 'Budket' }).
  // then(users => {
  //   console.log(users[0]); // 'A'
  //   return users[0];
  // }).
  // then(users => {
  //   console.log(users[0]); // 'B'
  // });

  // ** İdye göre bulma **
  // User.find({ id: '6165948ab174345764b2c3a3'}).
  // then(users => {
  //   console.log(users[0]); // 'A'
  //   return users[0];
  // }).
  // then(users => {
  //   console.log(users[0]); // 'B'
  // });

  res.status(200).json({
    data: {
      data: users,
    },
  });
};

module.exports = {
  getAllQuestions,
  getData,
};
