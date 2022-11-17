const sequelize = require('../db')       //Конфиг коннекта
const {DataTypes} = require('sequelize')  //Для описания типов переменных в таблицах

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // Тип, Значение типа, Автогенерация первичного ключа
    email: {type: DataTypes.STRING, unique: true},  // Тип, уникальность
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // Тип, Значение типа, Автогенерация первичного ключа
})

const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true} // Тип, Значение типа, Автогенерация первичного ключа
})

const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // Тип, Значение типа, Автогенерация первичного ключа
    name: {type: DataTypes.STRING, unique: true},   // Тип, уникальность
    price: {type: DataTypes.INTEGER, allowNull: true}, // Тип, возможность - отсутствия значения ДА
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // Тип, Значение типа, Автогенерация первичного ключа
    name: {type: DataTypes.STRING, unique: true, allowNull: false}  // Тип, уникальность
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // Тип, Значение типа, Автогенерация первичного ключа
    name: {type: DataTypes.STRING, unique: true, allowNull: false}  // Тип, уникальность
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // Тип, Значение типа, Автогенерация первичного ключа
    rate: {type: DataTypes.INTEGER, allowNull: false}  // Тип, возможность - отсутствия значения НЕТ
})

const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // Тип, Значение типа, Автогенерация первичного ключа
    specification: {type: DataTypes.STRING, allowNull: false},  // Тип, возможность - отсутствия значения НЕТ
    description: {type: DataTypes.STRING, allowNull: false}  // Тип, возможность - отсутствия значения НЕТ
})


//Промежуточная таблица для организации связи - много ко многим между Type >-< Brand
const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

module.exports={
    User,
    Basket,
    BasketDevice,
    Device,
    Brand,
    Type,
    Rating,
    TypeBrand,
    DeviceInfo
}



