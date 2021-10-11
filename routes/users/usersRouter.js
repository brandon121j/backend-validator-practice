var express = require('express');
var router = express.Router();
const { createUser } = require('./controller/usersController')

const {
    checkIsEmpty,
    checkIsUndefined,
    validateCreateData,
} = require('./lib/index')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post(
    '/create-user',
    checkIsUndefined,
    checkIsEmpty,
    validateCreateData,
    createUser
)

module.exports = router;
