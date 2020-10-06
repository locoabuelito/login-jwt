const User = require('../models/user');
const jwt = require('jsonwebtoken');
const service = require('../services/index')

// POST iniciar sesion
/*
async function signup (req, res){
    const {email} = req.body;
    const newUser = new User({email});
    await newUser.save();

    const token = jwt.sign({
            _id: newUser._id
        },
        'secretkey');

    res.status(200).json({token});
}*/

// POST registrar
/*
async function signin(req, res) {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if (!user) return res.status(401).send("Correo no valido!");
    if (user.password !== password) return res.status(401).send("Password incorrecto");
    const token = jwt.sign({_id: user._id}, 'secretkey');
    return res.status(200).json({token});
}
*/

// GET tarea public
function getTasksPublic (req, res){
    res.json([{
        _id:1,
        name: 'Public Tasks one',
        description: 'lorem ipsum',
        date: '2020-07-19T20:54'
    },
        {
            _id:2,
            name: 'Public Tasks two',
            description: 'lorem ipsum',
            date: '2020-07-19T20:54'
        },
        {
            _id:3,
            name: 'Public Tasks three',
            description: 'lorem ipsum',
            date: '2020-07-19T20:54'
        }])
}

// GET tarea private
function getTasksPrivate (req, res){
    res.json([{
        _id:1,
        name: 'Private Tasks one',
        description: 'lorem ipsum',
        date: '2020-07-19T20:54'
    },
        {
            _id:2,
            name: 'Private Tasks two',
            description: 'lorem ipsum',
            date: '2020-07-19T20:54'
        },
        {
            _id:3,
            name: 'Private Tasks three',
            description: 'lorem ipsum',
            date: '2020-07-19T20:54'
        }])
}

module.exports = {
    getTasksPublic,
    getTasksPrivate
}