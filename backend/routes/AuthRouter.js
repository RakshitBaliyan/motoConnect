
const { signup, login } = require('../controllers/AuthController');
const { SignupValidation, LoginValidation } = require('../middlewares/AuthValidation');

const router = require('express').Router();


router.post('/signup',SignupValidation,signup);

router.post('/login',LoginValidation, login);

module.exports = router;