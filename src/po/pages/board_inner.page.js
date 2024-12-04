import Page from "./page";
const SideMenu = require("./../components/board/SideMenuBoardComponent");

class Board_innerPage extends Page {
  constructor() {
    super();
    this.sideMenu = new SideMenu();
  }
  itemFromList(ttl) {
    return $(`a[title="${ttl} (currently active)"]`);
  }

  get pageTitle() {
    return $('h1[data-testid="board-name-display"]');
  }
  async deleteBoard(board_title) {
    await this.itemFromList(`${board_title}`).moveTo();
    await this.sideMenu.iconSettingsSideMenu.moveTo();
    await this.sideMenu.iconSettingsSideMenu.click();
    await this.sideMenu.btnCloseBoard.click();
    await this.sideMenu.btnCloseConfirm.click();
  }

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

  get filterCount() {
    return $('div[data-testid="filter-popover-button-filter-count"]');
  }

  get btnCloseNextCard() {
    return $('button[data-testid="list-card-composer-cancel-button"]');
  }
}

module.exports = new Board_innerPage();
