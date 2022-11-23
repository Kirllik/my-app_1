const {Brand} = require("../models/models");
const ApiError = require("../error/ApiEror")

class BrandController {

    async getAll(reg, res) {
        const brand = await Brand.findAll()
        return res.json(brand)
    }

    async create(reg, res) {
        const {name} = reg.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async delete(reg, res, next) {
        const {id} = reg.query   //Деструкт. из body запроса reg -> значения name
        if (!id) {               //Если id не указан в query параметрах
            return next(ApiError.badRequest("No id !!!"))  // return, Сообщаем о, ошибке
        }
        const del = await Brand.destroy({
            where: {id: id}
        })
        return res.json(del)   //return, response
    }
}

module.exports = new BrandController()