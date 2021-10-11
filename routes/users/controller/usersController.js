const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../model/Users');
const errorHandler = require('../../utils/errorHandler/errorHandler');

async function createUser(req, res) {
    let body = req.body
    const { firstName, lastName, username, email, password } = body

    try {
        let salt = await bcrypt.genSalt(10)
        let hashed = await bcrypt.hash(password, salt)
        const createdUser = new User({
            firstName,
            lastName,
            username,
            email,
            password: hashed
        })
        let savedUser = await createdUser.save();
        res.json({ message: "SUCCESS", savedUser })
    } catch (error) {
        res.status(500).json({ 
            message: "FAILURE",
            error: errorHandler(error)
        })
    }
}

module.exports = {
    createUser
}