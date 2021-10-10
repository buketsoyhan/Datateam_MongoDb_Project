const getAllQuestions = (req,res,next)=>{
    res
    .status(200)
    .json({
        success:true
    });
};

const getData = (req,res,next)=>{
    res.send("<h1>Merhaba</h1>")
};

module.exports= {
    getAllQuestions,
    getData
};