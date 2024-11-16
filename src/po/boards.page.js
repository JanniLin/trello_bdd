const { $ } = require("@wdio/globals");
const Page = require("./page");

class BoardsPage extends Page {
  get logo() {
    return $("div.qsCZSrobO7JoSv");
  }

  open() {
    return super.open("u/yana13460131/boards");
  }
}

module.exports = new BoardsPage();
