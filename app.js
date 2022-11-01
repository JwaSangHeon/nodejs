"use strict";

// Modules
const express = require("express");
const app = express();

const PORT = 3000;

// Routing
const home = require("./routes/home");

// App settings
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use => 미들 웨어를 등록해주는 메서드.

app.listen(PORT, () => {
  console.log(`${PORT}번에서 가동중....`);
});
