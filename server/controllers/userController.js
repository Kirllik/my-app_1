class UserController {

    async registration(reg, res) {

    }

    async login(reg, res) {

    }

    async check(reg, res) {
        const query = reg.query
        res.json(query.id)
    }
}

module.exports = new UserController