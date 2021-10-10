const User = require("../models/User");
const NodeRSA = require("node-rsa");
const key = new NodeRSA({ b: 512 });

const register = async (req, res, next) => {
  const name = "Buk";
  const email = "b@gmail.com";
  const password = "";

  const encrypted = key.encrypt(password, "base64");
  //const encrypted = crypto.AES.encrypt(JSON.stringify(password), "secret");

  const user = await User.create({
    name: name,
    email: email,
    password: encrypted,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
};


module.exports = {
  register
};
