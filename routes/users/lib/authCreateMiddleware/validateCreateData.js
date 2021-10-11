const {
    isAlpha,
    isAlphanumeric,
    isEmail,
    isStrongPassword
} = require('validator');

function validateCreateData(req, res, next) {

    const { firstName, lastName, username, email, password } = req.body
    let errObj = {}

    if (!isAlpha(firstName)) {
        errObj.firstName = "First name cannot contain any numbers or special characters"
    }

    if (!isAlpha(lastName)) {
        errObj.lastName = "Last name cannot contain any numbers or special characters"
    }

    if (!isAlphanumeric(username)) {
        errObj.username = "Username cannot contain any special characters"
    }

    if (!isEmail(email)) {
        errObj.email = "Please enter a valid email"
    }

    if (!isStrongPassword(password)) {
        errObj.password = "Password must contain 1 uppercase, 1 lowercase, and 1 special character"
    }

    if (Object.keys(errObj).length > 0) {
        return res.status(500).json({
            message: "ERROR",
            error: errObj
        })
    } else {
        next()
    }

}

module.exports = { validateCreateData }