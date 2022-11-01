"use strict";

// Modules
const express = require("express");
const router = express.Router();

// Controller
const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
router.get("/login", ctrl.login);

module.exports = router;
