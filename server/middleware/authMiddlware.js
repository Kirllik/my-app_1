const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] //Достаём из header.authorization токен и вычленяем токен через сплит по пробелу и получаем токен во 2 ячейки массива
        if (!token) {
            return res.status(401).json({message: "1 Не авторизован"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)   //Верификация токена по ключу в переменной окружения
        req.user = decoded   // Этот user будет доступен во всех функциях
        next()  //переход к следующей функции, в данном случае ->> check()
    } catch (e) {
        res.status(401).json({message: "2 Не авторизован"})
    }
}