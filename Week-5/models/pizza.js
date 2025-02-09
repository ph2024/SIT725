let client = require('../public/js/dbConnect');

let collection = client.db('task-5').collection('pizzaMenu');

// function to add pizza
async function postPizza(pizza, callback) {
        // First check if pizza already exists so that error message is displayed
        const existingPizza = await collection.findOne({ pizzaNameText: { $eq: pizza.pizzaNameText}});
        if(existingPizza) {
            response = "Pizza named " + pizza.pizzaName + " already created.";  
            return callback(null, response, 409);
        } else {
           await collection.insertOne(pizza);
           response = "Pizza named " + pizza.pizzaName + " created.";
           return callback(null, response, 409);
        };
    };

// Exporting the functions
module.exports = {
    postPizza
};