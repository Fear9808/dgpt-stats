const mongoose = require("mongoose");
const axios = require('axios');
var Schema = mongoose.Schema;
const endpoint = process.env.DGPT_BACKEND_CONNECTION;

mongoose.connect(endpoint, {
    useNewUrlParser: true
});
/* mongoose.model('testData', new Schema({ url: String, text: String, id: Number}, 
    { collection : 'test' }));
const test = mongoose.model('testData'); */

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once("open", function() {
    console.log("Connection with MongoDB was successful");
});

module.exports = async function (context, req) {

    context.log('JavaScript HTTP trigger function processed a request.');
    // Fetch data based on tournament or player maybee
    const query = {};
    
    const collection  = connection.db.collection("test");
    let response = await collection.find(query).toArray();
    //console.log(response);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response
    };
}