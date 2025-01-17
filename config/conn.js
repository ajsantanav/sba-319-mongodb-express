const mongoose = require("mongoose")

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        mongoose.connection.once("open", () => {
            console.log("Connected to MongoDB")
        });
    }
    catch (error) {
        console.log(`Cannot connect to the DB ${error}` )
    }
}
module.exports = connect;


// const mongoose = require("mongoose");

// const conn = async () => {
//   try {
//     //connect to the database
//     mongoose.connect(process.env.MONGO_URI);
//     mongoose.connection.once("open", () => {
//       console.log("connected to mongodb");
//     });
//   } catch (error) {
//     console.log(`Something went wrong connecting to mongodb: ${error.message}`);
//   }
// };

// module.exports = conn;