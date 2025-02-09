const { MongoClient, ServerApiVersion } = require("mongodb");
 
// Replace the placeholder with your Atlas connection string
const uri = "mongodb://localhost:27017/";

async function fetchAllData() {
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB server
        await client.connect();
 
        // Access the database and collection
        const db = client.db("task-5");
        const collection = db.collection("pizzaMenu");
 
        // Fetch all documents from the collection
        const data = await collection.find().toArray();
 
        // Print the data
        console.log(data);
    } catch (err) {
        console.error('Error fetching data:', err);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Run the function
fetchAllData();