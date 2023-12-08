const mongoose = require("mongoose");
const {DB_USER,DB_PASSWORD} = require('../configExpress')

/**Remota*/
const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.bwzbmmc.mongodb.net/taller_1`;

/**Local */
//const URI = "mongodb://localhost:27017/reservation";

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