const User = require('../models/user');
const service = require('../services/index')
const bcrypt = require('bcrypt-nodejs')

// POST registrar
async function signup (req, res){

    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    });
    await newUser.save((err) =>{
        if (err) res.status(500).send({message: `Error al crear usuario: ${err}`})
        return res.status(201).send({token: service.createToken(newUser)})
    });
}

// POST iniciar sesion
async function signin(req, res) {
    const {email, password} = req.body;
    const user = await User.findOne({email}, {_id: 0, password: 1, signUp:1, lastLogin: 1})

    if (!user) return res.status(401).send("Correo no valido!");
    bcrypt.compare(password, user.password, function (err, result){
        if (err){
            console.log(err)
        }else if (!result){
            res.status(401).send({
                message:"Password incorrecto"
            })
        }else {
            req.user = user;
            res.status(200).send({
                message: 'Login exitoso!',
                signUp: user.signUp,
                lastLogin: user.lastLogin,
                token: service.createToken(user)
            })
        }
    })
}

module.exports = {
    signin,
    signup
}