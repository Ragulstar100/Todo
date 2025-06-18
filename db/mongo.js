import mon from "mongoose"
import { appConfig } from "../config/config.js"  

export const connectToMongoDb = async () =>{

  try{
    await mon.connect(appConfig.mongo_url)
    console.log("Mongo Database Sucessfully")
  }catch(err){
    throw new Error(err);
  }

}






























// const { MongoClient } = require("mongodb");

// const username = encodeURIComponent("Ragul");

// const password = encodeURIComponent("U8rmXLVETjeSsinR");

// // Replace the uri string with your connection string
// export default  uri = `mongodb+srv://${username}:${password}@remindi.oxcdv5o.mongodb.net/?retryWrites=true&w=majority&appName=RemindI`;


// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db('RemindI');
    
//     await database.createCollection("movies")

//       await database.createCollection("movies")





//     // // Queries for a movie that has a title value of 'Back to the Future'
//     // const query = { title: 'Back to the Future' };

//     // const movie = await movies.findOne(query);
     
//     // const result = await movies.insertOne(query);

//     console.log(query);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);