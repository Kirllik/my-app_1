const {Type} = require('../models/models') //Деструктурированный импорт из моделей
const ApiEror = require('../error/ApiEror')

class TypeController {

    async create(reg, res) {
        const {name} = reg.body  //Деструкт. из body запроса reg -> значения name
        const type = await Type.create({name}) //В переменную type ложим await функцию параметром передаём name
        return res.json(type) //return Тормозит функцию и парсит в ответе
    }

    // async delete(reg, res) {
    //
    // }

    async getAll(reg, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()