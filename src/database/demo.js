const { MongoClient } = require('mongodb');

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://jitendrasandbhor:WhFPwq5kMFLQoKsD@cluster0.7zreu1o.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
       await createListing(client,{
            name:"lovely",
            summary:"having good life till the sans",
            bedrooms:1,
            bathroom:1
        })

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


main().catch(console.error);

async function createListing(client, newListing){
   const result= await client.db("sample_airbnb").collection("ListingsAndReviews").insertOne(newListing);

   console.log(`new listing created with following id ${result.insertedId}`)
}

async function listDatabases(client){
const databasesList = await client.db().admin().listDatabases();
console.log("Databases:");

databasesList.databases.forEach(db => {
console.log(`- ${db.name}`)    
});
}