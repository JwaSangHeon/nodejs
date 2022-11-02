"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const user = {
  id: ["hello", "whk4051", "icon"],
  password: ["1234", "1234", "1234"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const password = req.body.password;

    if (user.id.includes(id)) {
      const index = user.id.indexOf(id);
      if (user.password[index] === password) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      message: "로그인에 실패했습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};
