const LoginPage = require("../../po/pages/login.page");
const BoardsPage = require("../../po/pages/boards_general.page");

describe("Login functionality", () => {
  before("Login with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.btnLogin.click();

    await LoginPage.loginModal.userName.setValue("yana.rusakova.epam@gmail.com");
    await LoginPage.loginModal.btnSubmit.click();

    await LoginPage.loginModal.password.setValue("passworD123");
    await LoginPage.loginModal.btnSubmit.click();
    await browser.pause(5000);
  });
  it("logo 'Trello' is displayed", async () => {
    const logo = await BoardsPage.logo.isDisplayed();

    expect(logo).to.be.true;
  });
});
