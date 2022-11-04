"use strict";

class UserStorage {
  static #users = {
    id: ["hello", "whk4051", "icon"],
    password: ["1234", "1234", "1234"],
    name: ["김철수", "안지현", "김희애"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, key) => {
      newUser[key] = users[key][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
