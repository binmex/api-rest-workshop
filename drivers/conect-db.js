const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/reservation";

mongoose.set("strictQuery",false)

mongoose
  .connect(URI)
  .then(() => {
    console.log("Conect with database");
  })
  .catch((err) => {
    console.log(err);
  });

  module.exports = mongoose