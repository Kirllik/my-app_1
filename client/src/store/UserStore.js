import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = true
        this._user = {}
        makeAutoObservable(this)  //Функция для перерендера компонентов при изменении отслеживаемых переменных this в конструкторе
    }

    setIsAuth(bool) {     //Екшен (функция изменяющая состояние)
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    get isAuth() {        //Компютед функции (вызываются только тогда когда переменная была изменена (своего рода оптимизация))
        console.log("Смена переменной")
        console.log(this._isAuth)
        return this._isAuth
    }

    get user() {
        return this._user
    }
}