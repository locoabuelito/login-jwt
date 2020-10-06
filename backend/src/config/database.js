const mongoose = require('mongoose');
const config = require('./config')

mongoose.connect(config.db,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}) .then(db => console.log('Conectado a la base de datos'))
    .catch(err => console.log(err));