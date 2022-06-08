const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require("crypto")
require('dotenv').config();

// JWT_SECRET = KFDBFSDBFISDFSD9YSDF8WE9RIEWFUBEIUWIT783Y92U09ID9FDJIFB
// JWT_EXPIRE = 5

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter your name"],
        maxlength: [30, "name cannot be exceed to 30"],
        minlength: [4, "Name should have more than 4 character"]
    },
    email: {
        type: String,
        required: [true, "Please Enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please Enter your password"],
        minlength: [8, "Password should be greater than 8 character"],
        select: false
    },
    avator:
    {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },

    role: {
        type: String,
        default: "user"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

})

userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        next();
    }

    this.password = await bcrypt.hash(this.password, 10)
})

// JWT Token
// Schema + methods + functionName = fucntion()
const JWT_SECRET = "KFDBFSDBFISDFSD9YSDF8WE9RIEWFUBEIUWIT783Y92U09ID9FDJIFB"
const JWT_EXPIRE = 5
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id: this._id}, JWT_SECRET, {
        expiresIn: JWT_EXPIRE
    })
}

// Compare Password
userSchema.methods.comparePassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword, this.password)
}

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(20).toString("hex")

    // Hashing And adding to user schema
    this.resetPasswordToken = crypto.createHash("sha256")
    .update(resetToken)
    .digest("hex")

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000
    return resetToken;
}


module.exports = mongoose.model("User", userSchema)