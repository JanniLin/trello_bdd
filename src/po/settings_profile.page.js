const { $ } = require("@wdio/globals");
const Page = require("./page");

class Settings_profilePage extends Page {
  get name() {
    return $(
      'div[data-test-selector="field-edit-full-name"] div.css-1v0cd8t div[data-test-selector="profile-about-item-read-view"]',
    );
  }

  get jobTitle() {
    return $('div[data-test-selector="field-wrapper-job-title"]');
  }
}
module.exports = new Settings_profilePage();
