const { $ } = require("@wdio/globals");
const Page = require("./page");

class LoginPage extends Page {

  open() {
    return super.open("home");
  }

  get btnLogin() {
    return $('a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]');
  }

  get inputUserName() {
    return $("input#username");
  }
  get btnUserNameSubmit() {
    return $("button#login-submit");
  }
  get inputPassword() {
    return $("input#password");
  }
  get btnPasswordSubmit() {
    return $("button#login-submit");
  }
  async login() {
    await this.open();
    await this.btnLogin.click();
    await this.inputUserName.setValue("yana.rusakova.epam@gmail.com");
    await this.btnUserNameSubmit.click();
    await this.inputPassword.setValue("passworD123");
    await this.btnPasswordSubmit.click();
  }


}

module.exports = new LoginPage();
