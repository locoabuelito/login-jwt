const {Router} = require('express');
const router = Router();
const controllers = require('../controllers/user');
const auth = require('../controllers/auth')
const middleware = require('../middlewares/auth')


router.post('/signup', auth.signup)
router.post('/signin', auth.signin)
router.get('/tasks', controllers.getTasksPublic)
router.get('/private-tasks', middleware.isAuth, controllers.getTasksPrivate)

module.exports = router;

