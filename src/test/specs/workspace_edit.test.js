const pages = require("../../po/pagefactory");

describe("Workspace management", () => {
  before("Edit Workspace", async () => {
    await pages.login.login();
    await pages.boards.btnSettings.click();
    await pages.settingsWorkspace.btnWorkspaceVisibility.click();
    await pages.settingsWorkspace.publicOption.moveTo();
    await pages.settingsWorkspace.publicOption.click();
    await pages.settingsWorkspace.btnClosePopover.click();
    await browser.pause(2000);
  });
  it("I can see 'public' appeared in workspace visibility", async () => {
    const visibility = await pages.settingsWorkspace.visibility.getText();

    assert.match(
      visibility,
      /(Public|Публичная)/i,
      "The visibility should be set to 'Public'",
    );
  });
  after("visibility back to private", async () => {
    await pages.settingsWorkspace.btnWorkspaceVisibility.click();
    await pages.settingsWorkspace.privateOption.moveTo();
    await pages.settingsWorkspace.privateOption.click();
    await pages.settingsWorkspace.btnClosePopover.click();
  });
});
