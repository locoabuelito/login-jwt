module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://localhost/login-jwt',
    SECRET_TOKEN: 'miclavetokens'
}