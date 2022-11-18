const Router = require('express') //получаем Router из express
const router= new Router()   //создаём объект полученого Routera
const deviseRouter = require('./deviceRouter')
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviseRouter)

module.exports = router
