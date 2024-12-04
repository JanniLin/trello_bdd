const { $ } = require("@wdio/globals");
const Page = require("./page");
const BoardModal = require("./../components/board/BoardModalCreateComponent");

class Boards_generalPage extends Page {
  constructor() {
    super();
    this.boardModal = new BoardModal();
  }
  open() {
    return super.open("u/yana13460131/boards");
  }

  get logo() {
    return $("div.qsCZSrobO7JoSv");
  }



  boardFromList(ttl) {
    return $(`div[title="${ttl}"]`);
  }

  get btnSettings() {
    return $(
      '//span[contains(text(), "Настройки") or contains(text(), "Settings")]',
    );
  }

  get accountIcon() {
    return $('button[data-testid="header-member-menu-button"]');
  }

  get manageAccount() {
    return $('a[data-testid="account-menu-profile"]');
  }
}

module.exports = new Boards_generalPage();
