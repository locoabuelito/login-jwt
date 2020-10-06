const service = require('../services/index')
const config = require('../config/config');

function isAuth(req, res, next) {
    if (!req.headers.authorization){
        return res.status(401).send({
            message: 'Error! Peticion no autorizada!'
        });
    }

    const token = req.headers.authorization.split(' ')[1];
    service.decodeToken(token)
        .then(response =>{
            req.user = response
            next()
        })
        .catch(response =>{
            res.status(response.status)
        })
}

module.exports = {isAuth}