const {config} = require('dotenv')
const { Given, When, Then } = require("@wdio/cucumber-framework");
const pages = require("../../po/pagefactory");
config()

Given("I am on the login page", async () => {
  await pages.login.open();
});

When("I click the login button", async () => {
  await pages.login.btnLogin.click();
});

When(/^I insert (email|password)$/, async (credentialType) => {
  credentialType === "email"
    ? await pages.login.loginModal.userName.setValue(process.env.TRELLO_USERNAME)
    : await pages.login.loginModal.password.setValue(process.env.TRELLO_PASSWORD);
});

When(/^I click (continue|submit) button$/, async (button) => {
  if (button === "continue" || button === "submit") {
    await pages.login.loginModal.btnSubmit.click();
    await browser.pause(4000);
  }
});

Then("logo 'Trello' is displayed", async () => {
  const logo = await pages.boards.logo.isDisplayed();

  await expect(logo).to.be.true;
});
