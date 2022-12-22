import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
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
        return this._isAuth
    }

    get user() {
        return this._user
    }
}