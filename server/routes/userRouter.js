const Router = require('express') //получаем Router из express
const router = new Router()   //создаём объект полученого Routera
const userController = require('../controllers/userController')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)

module.exports = router