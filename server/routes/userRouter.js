const Router = require('express') //получаем Router из express
const router = new Router()   //создаём объект полученого Routera
const userController = require('../controllers/userController')
const authMiddleware=require('../middleware/authMiddlware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)  //Передача Middleware в роут /auth, в метод check, класса userController

module.exports = router