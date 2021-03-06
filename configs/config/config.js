/**
 * module dependencies for server configuration
 */
const path = require("path");
const databaseUrl = require("./mongoDBDetails").DBURL;
import localConfig from "./local";

/**
 * server configurations
 */
const serverConfigs = {
  PORT: process.env.PORT || localConfig.port,
  ROOT: path.resolve(__dirname, ".."),
  DBURL: databaseUrl,
};

module.exports = serverConfigs;
