const uuid = require("uuid")
const path = require("path");
const {Device} = require('../models/models')
const ApiError = require("../error/ApiEror");

class DeviceController {

    async create(reg, res, next) {
        try {
            let {name, price, brandId, typeId, info} = reg.body //Деструкт img из тела запроса
            const {img} = reg.files  //Деструкт img из тела запроса
            let fileName = uuid.v4() + ".jpg"  //Для сoздание уникального номера
            img.mv(path.resolve(__dirname, '..', 'static', fileName)) //перемещение изображения в папку со статикой
            //функция resolve у path адаптирует указанный путь к операционной системе
            //__dirname - путь до текущей папке с контроллерами
            // ".." вернуться на директорию назад
            // fileName - папка (в данном случае static)

            const device = await Device.create({name, price, brandId, typeId, img: fileName})

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }


    }

    async getAll(reg, res) {
        let {brandId, typeId} = reg.query
        let devices;

        if (!brandId && !typeId) { //Нет бренда и нет типа
            devices = await Device.findAll()
        }
        if (brandId && !typeId) {  //Есть только brandId
            devices = await Device.findAll({where: {brandId}})
        }
        if (!brandId && typeId) {  //Есть только typeId
            devices = await Device.findAll({where: {typeId}})
        }
        if (brandId && typeId) {   //Есть оба
            devices = await Device.findAll({where: {typeId, brandId}})
        }
        return res.json(devices)
    }

    async getOne(reg, res) {

    }

    // async delete(reg, res) {
    //
    // }
}

module.exports = new DeviceController()