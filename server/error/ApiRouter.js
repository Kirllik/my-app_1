class ApiError extends Error {  // class расширяет класс Error
    constructor(status, message) {
        super();   //Вызываем родительский конструктор Error
        this.status = status  //Присваеваем то что получаем параметрами в конструкторе ApiError
        this.message = message
    }

    //Статические функции которые можно вызывать без создания объекта обращаясь к ним ApiError.badRequest()
    static badRequest(message) {  //Плохой запрос
        return new ApiError(404, message)
    }

    static internal(message) {
        return new ApiError(500, message)
    }

    static forbidden(message) {   //Доступа нет
        return new ApiError(403, message)
    }
}

module.exports = ApiError