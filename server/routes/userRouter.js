const Router = require('express') //получаем Router из express
const router= new Router()   //создаём объект полученого Routera

router.post('/registration',)
router.post('/login',)
router.get('/auth',(reg,res) =>{
    res.status(200).json({message: 'WORKING'})
})

module.exports = router