const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const serverConfigs = require("./configs/config/config");
const mongoDBDetails = require("./configs/config/mongoDBDetails");

mongoose
  .connect(serverConfigs.DBURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connection to MongoDB successful"))
  .catch((err) => console.error(err, mongoDBDetails));

const app = express();

require("./configs/express")(app, serverConfigs);

app.listen(serverConfigs.PORT, (error) => {
  if (error) throw error;
  console.log("Server running on port: " + serverConfigs.PORT);
});
