const { $ } = require("@wdio/globals");
module.exports = class List {
  get btnAddList() {
    return $('button[data-testid="list-composer-button"]');
  }
  get addListTitle() {
    return $('textarea[data-testid="list-name-textarea"]');
  }

  get btnSubmitAddList() {
    return $('button[data-testid="list-composer-add-list-button"]');
  }

  get listEl() {
    return $('div h2[data-testid="list-name"]');
  }

  get btnCloseNextList() {
    return $('button[data-testid="list-composer-cancel-button"]');
  }

  get listSettingsIcon() {
    return $('button[data-testid="list-edit-menu-button"]');
  }

  get btnDeleteList() {
    return $('button[data-testid="list-actions-archive-list-button"]');
  }
};
