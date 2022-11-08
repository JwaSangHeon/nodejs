"use strict";

const app = require("../app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`${PORT}번에서 가동중....`);
});
