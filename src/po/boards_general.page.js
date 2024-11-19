const { $ } = require("@wdio/globals");
const Page = require("./page");

class Boards_generalPage extends Page {
  open() {
    return super.open("u/yana13460131/boards");
  }

  get logo() {
    return $("div.qsCZSrobO7JoSv");
  }

  get createNewBoard() {
    return $('div[class="board-tile mod-add"]');
  }

  get createBoardTitle() {
    return $('input[data-testid="create-board-title-input"]');
  }

  get btnSubmitCreate() {
    return $('button[data-testid="create-board-submit-button"]');
  }

  boardFromList(ttl) {
    return $(`div[title="${ttl}"]`);
  }

  get btnSettings() {
    return $('//span[contains(text(), "Настройки")]');
  }
}

module.exports = new Boards_generalPage();
