let collection = require('../models/pizza');

const postPizza = (req,res) => {
    let pizza = req.body;
    collection.postPizza(pizza, (err,result) => {
        if (!err) {
           res.json({data:result});
        } 
    });
}

module.exports = { postPizza }