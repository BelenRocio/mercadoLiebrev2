var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productControllers.js')

/* GET users listing. */
router.get('/detail/:id/:category', prodyctsController.detail);

module.exports = router;
