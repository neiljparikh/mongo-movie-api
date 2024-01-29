const { User } = require("../models")

module.exports = {
    getAllUsers: async (req, res) => {
        const users = await User.find()
        res.json(users)
    }
}