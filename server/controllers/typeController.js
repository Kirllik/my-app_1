const {Type} = require('../models/models') //Деструктурированный импорт из моделей
const apiError = require("../error/ApiEror");

class TypeController {

    async create(reg, res) {
        const {name} = reg.body  //Деструкт. из body запроса reg -> значения name
        // console.log(reg)
        const type = await Type.create({name}) //В переменную type кладём await функцию параметром передаём name
        return res.json(type) //return Тормозит функцию и парсит в ответе, в базу
    }

    async delete(reg, res, next) {
        const {id} = reg.query
        if (!id) {
            return next(apiError.badRequest("No id !!!"))
        }
        const del = await Type.destroy({
            where: {id: id}
        })
        return res.json(del)
    }

    async getAll(reg, res) {
        //console.log("reg.body")
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()