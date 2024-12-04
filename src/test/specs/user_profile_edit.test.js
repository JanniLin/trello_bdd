const LoginPage = require("../../po/pages/login.page");
const BoardsPage = require("../../po/pages/boards_general.page");
const SettingsProfile = require("../../po/pages/settings_profile.page");

describe("User profile management", () => {
  before("Edit user profile", async () => {
    await LoginPage.login();
    await BoardsPage.profile.accountIcon.click();
    await BoardsPage.profile.manageAccount.click();
    await SettingsProfile.userNameInput.setValue("yana_rusakova");
    await SettingsProfile.btnSave.click();
    await browser.pause(3000);
  });
  it("I see page url is changed", async () => {
    const url = await browser.getUrl();

    url.should.be.a("string").and.equal("https://trello.com/u/yana_rusakova");
  });
  after("change username", async () => {
    await SettingsProfile.userNameInput.setValue("yana13460131");
    await SettingsProfile.btnSave.click();
  });
});
