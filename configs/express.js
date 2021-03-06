/**
 * module dependencies for express configuration
 */
const morgan = require("morgan");
const bodyParser = require("body-parser");
var cors = require("cors");
const routeConfig = require("../routes/routes");

/**
 * express configuration
 */
const expressConfig = (app, serverConfigs) => {
  //allow cors
  app.use(cors());

  // log server requests to console
  !serverConfigs.PRODUCTION && app.use(morgan("dev"));

  // get data from html froms
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // apply route configs
  routeConfig(app);
};

module.exports = expressConfig;
