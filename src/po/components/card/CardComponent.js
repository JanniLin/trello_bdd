const { $ } = require("@wdio/globals");
module.exports = class CardComponent {
  get btnAddCard() {
    return $('button[data-testid="list-add-card-button"]');
  }

  get cardTextArea() {
    return $('textarea[data-testid="list-card-composer-textarea"]');
  }

  get btnSubmitAddCard() {
    return $('button[data-testid="list-card-composer-add-card-button"]');
  }

  get card() {
    return $('li[data-testid="list-card"]');
  }

  get btnFilterCard() {
    return $('button[data-testid="filter-popover-button"]');
  }

  get filterSearchInput() {
    return $(
      'input[class="nch-textfield__input lsOhPsHuxEMYEb lsOhPsHuxEMYEb"]',
    );
  }
  get btnCloseNextCard() {
    return $('button[data-testid="list-card-composer-cancel-button"]');
  }
};
