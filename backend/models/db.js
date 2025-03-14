const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_CONN;
console.log(mongo_url);

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("MongoDB connected....");
  })
  .catch((err) => {
    console.log("MongoDb connection error-", err);
  });
