"use Strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;

    const { id, password } = await UserStorage.getUserInfo(client.id);

    if (id) {
      if (id === client.id && password === client.password) {
        return { success: true };
      }
      return { success: false, message: "비밀번호가 틀렸습니다." };
    }
    return { success: false, message: "해당 계정은 없습니다." };
  }

  signup() {
    const client = this.body;
    return UserStorage.save(client);
  }
}

module.exports = User;
