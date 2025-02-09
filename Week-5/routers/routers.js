let express = require('express');
let router = express.Router();

let controller = require('../controllers/controllers');

router.post('/', function(req,res){
    controller.postPizza(req,res);
});

module.exports = router;