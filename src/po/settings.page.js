const Page = require("./page");

class SettingsPage extends Page {
  get btnWorkspaceVisibility() {
    return $('button[data-testid="workspace-settings-visibility-button"]');
  }
  get publicOption() {
    return $('div[class="wfj__FaUUGQGeV"]');
  }
  get visibility() {
    return $('p[data-testid="ws-visibility-details"]');
  }
}
module.exports = new SettingsPage();
