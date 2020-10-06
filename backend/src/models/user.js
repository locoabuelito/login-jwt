const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt-nodejs')
const saltRounds = 8;

const userSchema = new Schema({
    email: {type:String, unique: true, lowercase: true},
    password: {type: String, select: false},
    signUp: {type: Date, default: Date.now()},
    lastLogin: Date
});

// Encriptar antes de guardar en la bd

userSchema.pre('save', function(next) {

    let user = this
    if (!user.isModified('password')) return next()

    bcrypt.genSalt(10, (err, salt)=>{
        if (err) return next(err)

        bcrypt.hash(user.password, salt, null, (err, hash)=>{
            if (err) return next(err)

            user.password = hash
            next()
        })
    })
})



module.exports = model('User', userSchema);