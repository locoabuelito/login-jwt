const express = require('express');
const app = express();
const config = require('./config/config')


require('./config/database');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))
app.use('/api', require('./routes/routes'));

app.listen(config.port, ()=>{
    console.log(`Server en el puerto ${config.port}`);
});
