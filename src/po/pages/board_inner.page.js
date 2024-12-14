import Page from "./page";
const SideMenu = require("./../components/board/SideMenuBoardComponent");
const List = require("./../components/list/ListComponent");
const Card = require("./../components/card/CardComponent");

class Board_innerPage extends Page {
  constructor() {
    super();
    this.sideMenu = new SideMenu();
    this.list = new List();
    this.card = new Card();
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

  get filterCount() {
    return $('div[data-testid="filter-popover-button-filter-count"]');
  }
}

module.exports = new Board_innerPage();
