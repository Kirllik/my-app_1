const Router = require('express') //получаем Router из express
const router= new Router()   //создаём объект полученого Routera
const brandController = require("../controllers/brandController")

router.post('/',brandController.create)
router.get('/', brandController.getAll)
router.delete('/', brandController.delete)


// router.delete('/')

module.exports = router