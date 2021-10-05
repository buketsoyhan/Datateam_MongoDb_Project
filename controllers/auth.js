const User = require('../models/User');

const register = async (req,res,next) => {

    const name="Batuhan Soyhan";
    const email="batuhansoyhann@gmail.com";
    const password="123456";

    const user = await User.create({
        name:name,
        email:email,
        password:password
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


// const register = (req,res,next)=>{
//     res
//     .status(200)
//     .json({
//         success:true
//     });
// };

// module.exports= {
//     register
// };