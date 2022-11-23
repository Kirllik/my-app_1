const apiError = require('../error/ApiEror')

class UserController {

    async registration(reg, res) {

    }

    async login(reg, res) {

    }

    async check(reg, res, next) {
        const {id} = reg.query
        console.log(reg.query.id )
        if (!id) {
            return next(apiError.badRequest("No id"))
        }
        res.json(id)
    }
}

module.exports = new UserController