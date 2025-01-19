const Page = require("./page");
const LoginModal = require("./../components/login/LoginModalComponent");
const {config} = require('dotenv')
config()

class LoginPage extends Page {
  constructor() {
    super();
    this.loginModal = new LoginModal();
  }
  open() {
    return super.open("/home");
  }

  get btnLogin() {
    return $('a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]');
  }

  async login() {

    await this.open();
    await this.btnLogin.click();
    await this.loginModal.userName.setValue(process.env.TRELLO_USERNAME);
    await this.loginModal.btnSubmit.click();
    await this.loginModal.password.setValue(process.env.TRELLO_PASSWORD);
    await this.loginModal.btnSubmit.click();
  }
}

module.exports = new LoginPage();
