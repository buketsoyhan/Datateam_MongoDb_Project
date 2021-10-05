const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:[true, "İsim alanı boş bırakılamaz!"]
    },
    email:{
        type: String,
        required:[true, "Email alanı boş bırakılamaz!"],
        unique:[true, "Email adresi başka biri tarafından kullanılıyor"],
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Geçerli bir e-mail adresi giriniz."
        ]
    },
    role:{
        type:String,
        default:"user",
        enum:["user", "admin"]
    },
    password:{
        type:String,
        minlength:6,
        required:[true, "Şifre giriniz"],
        select:false
    }
});

module.exports = mongoose.model("User", UserSchema);