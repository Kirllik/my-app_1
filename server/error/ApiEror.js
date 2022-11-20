class ApiEror extends Error {  // class расширяет класс Error
    constructor(status, message) {
        super();   //Вызываем родительский конструктор Error
        this.status = status  //Присваеваем то что получаем параметрами в конструкторе ApiEror
        this.message = message
    }

    //Статические функции которые можно вызывать без создания объекта обращаясь к ним ApiEror.badRequest()
    static badRequest(message) {  //Плохой запрос
        return new ApiEror(404, message)
    }

    static internal(message) {
        return new ApiEror(500, message)
    }

    static forbidden(message) {   //Доступа нет
        return new ApiEror(403, message)
    }
}

module.exports = ApiEror