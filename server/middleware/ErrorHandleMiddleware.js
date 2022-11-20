const ApiEror = require("../error/ApiEror")

module.exports = function (err, req, res, next) {  //функция и есть Midlware в данном случае
    if (err instanceof ApiEror) {  //Если класс ошибки ApiEror
        return res.status(err.status).json({message: err.message}) //return для прекращения функции. Возвращаем на клиент ответ со статус кодом который будем получать из err и с сообщением которое мы в эту ошибку поместили
    }
    return res.status(500).json({message: "Не предвиденная ошибка"}) //Если попадет ошибка не являющаяся (instance ApiEror) вернём на клиент 500, и сообщение заглушку, так как мы эту ошибку не обработали
}