const LoginPage = require("../../po/pages/login.page");
const BoardsPage = require("../../po/pages/boards_general.page");
const SettingsPage = require("../../po/pages/settings_workspace.page");

describe("Workspace management", () => {
  before("Edit Workspace", async () => {
    await LoginPage.login();
    await BoardsPage.btnSettings.click();
    await SettingsPage.btnWorkspaceVisibility.click();
    await SettingsPage.publicOption.moveTo();
    await SettingsPage.publicOption.click();
    await SettingsPage.btnClosePopover.click();
    await browser.pause(2000);
  });
  it("I can see 'public' appeared in workspace visibility", async () => {
    const visibility = await SettingsPage.visibility.getText();

    assert.match(
      visibility,
      /(Public|Публичная)/i,
      "The visibility should be set to 'Public'",
    );
  });
  after("visibility back to private", async () => {
    await SettingsPage.btnWorkspaceVisibility.click();
    await SettingsPage.privateOption.moveTo();
    await SettingsPage.privateOption.click();
    await SettingsPage.btnClosePopover.click();
  });
});
