const pages = require("../../po/pagefactory");

describe("Login functionality", () => {
  before("Login with valid credentials", async () => {
    await pages.login.open();
    await pages.login.btnLogin.click();

    await pages.login.loginModal.userName.setValue(
      "yana.rusakova.epam@gmail.com",
    );
    await pages.login.loginModal.btnSubmit.click();

    await pages.login.loginModal.password.setValue("passworD123");
    await pages.login.loginModal.btnSubmit.click();
    await browser.pause(5000);
  });
  it("logo 'Trello' is displayed", async () => {
    const logo = await pages.boards.logo.isDisplayed();

    expect(logo).to.be.true;
  });
});
