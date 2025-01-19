const pages = require("../../po/pagefactory");
const {config} = require('dotenv')
config()

describe("Login functionality", () => {
  before("Login with valid credentials", async () => {
    await pages.login.open();
    await pages.login.btnLogin.click();

    await pages.login.loginModal.userName.setValue(process.env.TRELLO_USERNAME);
    await pages.login.loginModal.btnSubmit.click();

    await pages.login.loginModal.password.setValue(process.env.TRELLO_PASSWORD);
    await pages.login.loginModal.btnSubmit.click();
    await browser.pause(5000);
  });
  it("logo 'Trello' is displayed", async () => {
    const logo = await pages.boards.logo.isDisplayed();

    expect(logo).to.be.true;
  });
});
