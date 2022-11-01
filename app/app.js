"use strict";

// Modules
const express = require("express");
const app = express();

// Routing
const home = require("./src/routes/home");

// App settings
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use => 미들 웨어를 등록해주는 메서드.

module.exports = app;
