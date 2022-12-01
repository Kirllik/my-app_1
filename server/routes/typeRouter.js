const Router = require('express') //получаем Router из express
const router = new Router()   //создаём объект полученого Routera
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddlware')

router.post('/', checkRole('ADMIN'), typeController.create)   //При вызове метода create, туда попадёт middleware с параметром checkRole('ADMIN')   ПОЭТОМУ ОН НЕ ПЕРЕДАЁТСЯ а ВЫЗЫВАЕТСЯ
router.get('/', typeController.getAll)
router.delete('/', typeController.delete)

module.exports = router