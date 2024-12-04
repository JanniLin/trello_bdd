const { $ } = require("@wdio/globals");
module.exports = class ProfileManageComponent {
  get accountIcon() {
    return $('button[data-testid="header-member-menu-button"]');
  }

  get manageAccount() {
    return $('a[data-testid="account-menu-profile"]');
  }
};
