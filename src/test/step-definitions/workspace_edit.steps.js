const pages = require("../../po/pagefactory");
const { When, Then, After } = require("@wdio/cucumber-framework");

When("I click 'settings' button", async () => {
  await pages.boards.btnSettings.click();
});
When("I click workspace visibility 'change' button", async () => {
  await pages.settingsWorkspace.btnWorkspaceVisibility.click();
});
When("I click 'public' option", async () => {
  await pages.settingsWorkspace.publicOption.moveTo();
  await pages.settingsWorkspace.publicOption.click();
});
When("I click 'close popover' button", async () => {
  await pages.settingsWorkspace.btnClosePopover.click();
});
Then("I can see 'public' appeared in workspace visibility", async () => {
  const visibility = await pages.settingsWorkspace.visibility.getText();

  await assert.match(
    visibility,
    /(Public|Публичная)/i,
    "The visibility should be set to 'Public'",
  );
});
After("@visibility_private", async () => {
  await pages.settingsWorkspace.btnWorkspaceVisibility.click();
  await pages.settingsWorkspace.privateOption.moveTo();
  await pages.settingsWorkspace.privateOption.click();
  await pages.settingsWorkspace.btnClosePopover.click();
});
