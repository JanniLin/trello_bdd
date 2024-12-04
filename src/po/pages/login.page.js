const { $ } = require("@wdio/globals");
const Page = require("./page");
const LoginModal = require("./../components/login/LoginModalComponent");

class LoginPage extends Page {
  constructor() {
    super();
    this.loginModal = new LoginModal();
  }
  open() {
    return super.open("home");
  }

  get btnLogin() {
    return $('a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]');
  }

  async login() {
    await this.open();
    await this.btnLogin.click();
    await this.loginModal.userName.setValue("yana.rusakova.epam@gmail.com");
    await this.loginModal.btnSubmit.click();
    await this.loginModal.password.setValue("passworD123");
    await this.loginModal.btnSubmit.click();
  }
}

module.exports = new LoginPage();
