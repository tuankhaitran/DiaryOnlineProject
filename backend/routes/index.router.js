const express = require('express');
const router = express.Router();
const jwtHelper=require('../config/jwthHelper');

const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

module.exports = router;
