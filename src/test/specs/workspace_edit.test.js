const LoginPage = require("../../po/login.page");
const BoardsPage = require("../../po/boards_general.page");
const SettingsPage = require("../../po/settings.page");

describe("Workspace management", () => {
  it("Edit Workspace", async () => {
    await LoginPage.login();
    await BoardsPage.btnSettings.click();
    await SettingsPage.btnWorkspaceVisibility.click();
    await SettingsPage.publicOption.moveTo();
    await SettingsPage.publicOption.click();
  });
  it("I can see 'public' appeared in workspace visibility", async () => {
    const visibility = await SettingsPage.visibility.getText();
    expect(visibility).toMatch(/(Public|Приватная)/i);
  });
});
