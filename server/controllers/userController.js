const apiError = require('../error/ApiEror')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')


class UserController {

    async registration(reg, res, next) {
        const {email, password, role} = reg.body
        if (!email || !password) {
            return next(apiError.badRequest("Не корректный email или password !"))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(apiError.badRequest("Пользователь с таким email уже существует"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = jwt.sign(
            {id: user.id, email, role},
            process.env.SECRET_KEY,
            {expiresIn: '24'}
        )
        return res.json({token})
    }

    async login(reg, res) {

    }

    async check(reg, res, next) {
        const {id} = reg.query
        console.log(reg.query.id)
        if (!id) {
            return next(apiError.badRequest("No id"))
        }
        res.json(id)
    }
}

module.exports = new UserController