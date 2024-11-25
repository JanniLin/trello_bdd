const { $ } = require("@wdio/globals");
const Page = require("./page");

class Settings_profilePage extends Page {
  get userNameInput() {
    return $("#username");
  }

  get btnSave() {
    return $('button[type="submit"]');
  }
}

module.exports = new Settings_profilePage();
