"use Strict";

const UserStorage = require("./UserStorage");

UserStorage;

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const { id, password } = UserStorage.getUserInfo(this.body.id);

    if (id) {
      if (id === this.body.id && password === this.body.password) {
        return { success: true };
      }
      return { success: false, message: "비밀번호가 틀렸습니다." };
    }
    return { success: false, message: "해당 계정은 없습니다." };
  }
}

module.exports = User;
