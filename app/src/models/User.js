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

  async signup() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      console.log(err);
      return { success: false, message: err };
    }
  }
}

module.exports = User;
