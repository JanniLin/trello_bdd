const pages = require("../../po/pagefactory");
const { When, Then, After } = require("@wdio/cucumber-framework");

When("I click 'account' icon", async () => {
  await pages.boards.profile.accountIcon.click();
});

When("I click 'Profile and visibility'", async () => {
  await pages.boards.profile.manageAccount.click();
});

When("I change username with 'yana_rusakova'", async () => {
  await pages.settingsProfile.userNameInput.setValue("yana_rusakova");
});

When("I click save button", async () => {
  await pages.settingsProfile.btnSave.click();
  await browser.pause(3000);
});
Then("I see page url is changed", async () => {
  const url = await browser.getUrl();

 await url.should.be.a("string").and.equal("https://trello.com/u/yana_rusakova");
});

After("@change_username", async () => {
  await pages.settingsProfile.userNameInput.setValue("yana13460131");
  await pages.settingsProfile.btnSave.click();
});
