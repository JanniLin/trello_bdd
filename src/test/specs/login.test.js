const LoginPage = require("../../po/login.page");
const BoardsPage = require("../../po/boards_general.page");

describe("Login functionality", () => {
  before("Login with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.btnLogin.click();

    await LoginPage.inputUserName.setValue("yana.rusakova.epam@gmail.com");
    await LoginPage.btnUserNameSubmit.click();

    await LoginPage.inputPassword.setValue("passworD123");
    await LoginPage.btnPasswordSubmit.click();
  });
  it("logo 'Trello' is displayed", async () => {
    const logo = BoardsPage.logo;
     expect(logo).toExist();
  });
});
