var express = require('express');
var router = express.Router();
 
const DAL = require('../Data-Access-Layer/dataaccesslayer')
/* GET home page. */
router.get('/books', function(req, res, next) {
 DAL.getAllBooks(req, res);
});
 
module.exports = router;


