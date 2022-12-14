"use strict";

const User = require("../../models/User");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  signup: (req, res) => {
    res.render("home/signup");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  signup: async (req, res) => {
    const user = new User(req.body);
    const response = await user.signup();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
