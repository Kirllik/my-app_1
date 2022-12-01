const jwt = require('jsonwebtoken')

module.exports = function (role) {
    return function (req, res, next) {
        if (req.user === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1] //Достаём из header.authorization токен и вычленяем токен через сплит по пробелу и получаем токен во 2 ячейки массива
            if (!token) {
                return res.status(401).json({message: "1 Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== role) {  // Истина - если декодированная из токена роль не равна - ADMIN
                res.status(403).json({message: "Нет доступа"})
            }
            req.user = decoded
            next()
        } catch (e) {
            res.status(401).json({message: "2 Не авторизован"})
        }
    }
}

