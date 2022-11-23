const Router = require('express') //получаем Router из express
const router = new Router()   //создаём объект полученого Routera
const typeController = require('../controllers/typeController')

router.post('/', typeController.create)
router.get('/', typeController.getAll)
router.delete('/', typeController.delete)

module.exports = router