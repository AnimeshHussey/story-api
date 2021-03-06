/**
 * module dependencies for routes configuration
 */
const path = require("path");
const express = require("express");

import { storyPlanningApi } from "../controllers/tasks/storyPlanningApi";
/**
 * routes configurations
 */
const routesConfig = (app) => {
  // serve api endpoint
  app.get("/api", (req, res) => {
    res.send("Hello from API endpoint");
  });

  //apply activity apis
  storyPlanningApi(app);
};

module.exports = routesConfig;
