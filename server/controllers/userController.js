const apiError = require('../error/ApiEror')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJvt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}  //3 парам. это опции. В данном случае - время жизни токена
    )
}


class UserController {

    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(apiError.badRequest("Не корректный email или password !"))
        }
        const candidate = await User.findOne({where: {email}})   //проверка в BD на наличие юзера с таким email
        if (candidate) {
            return next(apiError.badRequest("Пользователь с таким email уже существует"))
        }
        // Eсли все проверки прошли
        const hashPassword = await bcrypt.hash(password, 5)  // Хэш пароля
        const user = await User.create({email, role, password: hashPassword}) // Пишем юзера в BD
        const basket = await Basket.create({userId: user.id})    // Присваиваем юзеру корзину в BD
        const token = generateJvt(user.id, user.email, user.role)   // Генерим узеру токен по данным регистрации
        return res.json({token})  //Отсылаем токен в json формате на клиент
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(apiError.internal("Пользователь с таким email не найден"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password) // Сравниваем пароль в запросе с паролем в BD найденного там юзера
        if (!comparePassword) {     // Не совпадает?
            return next(apiError.internal("Неверный пароль"))
        }
        // Eсли все проверки прошли
        const token = generateJvt(user.id, user.email, user.role)  //Генерим токен
        return res.json({token})     //Отсылаем токен в json формате на клиент
    }


    async check(req, res, next) {
        const token = generateJvt(req.user.id, req.user.email, req.user.role) //Генерация нового токена
        return res.json({token})
        //return  res.json({message:"All right"}) // Для проверки
    }
}

module.exports = new UserController