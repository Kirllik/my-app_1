const Router = require('express') //получаем Router из express
const router = new Router()   //создаём объект полученого Routera
const deviceController = require('../controllers/deviceController')
const checkRole = require("../middleware/checkRoleMiddlware")

router.post('/', checkRole('ADMIN'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router