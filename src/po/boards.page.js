const { $ } = require("@wdio/globals");
const Page = require("./page");

class BoardsPage extends Page {
  get logo() {
    return $("div.qsCZSrobO7JoSv");
  }
  get createNewBoard (){
    return $('div.board-tile')
  }
  get boardTitle () {
    return $('input[data-testid="create-board-title-input"]')
  }


  open() {
    return super.open("u/yana13460131/boards");
  }
}

module.exports = new BoardsPage();
