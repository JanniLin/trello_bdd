const pages = require("../../po/pagefactory");

describe("User profile management", () => {
  before("Edit user profile", async () => {
    await pages.login.login();
    await pages.boards.profile.accountIcon.click();
    await pages.boards.profile.manageAccount.click();
    await pages.settingsProfile.userNameInput.setValue("yana_rusakova");
    await pages.settingsProfile.btnSave.click();
    await browser.pause(3000);
  });
  it("I see page url is changed", async () => {
    const url = await browser.getUrl();

    url.should.be.a("string").and.equal("https://trello.com/u/yana_rusakova");
  });
  after("change username", async () => {
    await pages.settingsProfile.userNameInput.setValue("yana13460131");
    await pages.settingsProfile.btnSave.click();
  });
});
