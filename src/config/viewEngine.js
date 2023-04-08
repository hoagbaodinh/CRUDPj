import express from "express";
let configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  // cho nodeJs biet client co the truy cap vao nhung thu muc nao
  app.set("view engine", "ejs");
  // cho phep go duoc logic trong file html
  app.set("views", "./src/views");
  // tim kiem tat ca cai file ejs trong thu muc views
};

module.exports = configViewEngine;
