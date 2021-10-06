const User = require('../models/User');
const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});

const register = async (req,res,next) => {

    const name="Bukeeet";
    const email="bukett@gmail.com";
    const password="1234567";

    const encrypted = key.encrypt(password, 'base64');

    const user = await User.create({
        name:name,
        email:email,
        password: encrypted
    });

    res
    .status(200)
    .json({
        success:true,
        data:user
    });
};

module.exports= {
    register
};

