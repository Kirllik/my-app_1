require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandleMiddleware')


const PORT = process.env.PORT || 5000

const app = express()     //Фреймворк для создания сервера
app.use(cors())           //Для запросов с браузера
app.use(express.json())   //Для возможности парсить в JSON формате
app.use('/api', router)

//Этот Midlware вызывается последним, вследствии чего функция next в нём не вызывалась, так как он -> замыкающий
app.use(errorHandler)

// app.get('/', (reg, res) => {
//     res.status(200).json({message: 'WORKING'})
// })

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()