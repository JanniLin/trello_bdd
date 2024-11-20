const Page = require("./page");

class SettingsPage extends Page {
  get btnWorkspaceVisibility() {
    return $('button[data-testid="workspace-settings-visibility-button"]');
  }
  get publicOption() {
    return $('span[data-testid="visibility-name-public"]');
  }
  get privateOption (){
    return $('span[data-testid="visibility-name-private"]')
  }
  get btnClosePopover(){
    return $('button[data-testid="popover-close"]')
  }
  get visibility() {
    return $('p[data-testid="ws-visibility-details"]');
  }
}
module.exports = new SettingsPage();
