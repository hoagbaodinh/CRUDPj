import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/papin", (req, res) => {
    return res.send("Hello, papin!");
  });
  return app.use("/", router);
};

module.exports = initWebRoutes;
