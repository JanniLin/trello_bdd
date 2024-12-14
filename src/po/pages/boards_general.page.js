const Page = require("./page");
const BoardModal = require("./../components/board/BoardModalCreateComponent");
const ProfileManage = require("./../components/profile/ProfileManageComponent");

class Boards_generalPage extends Page {
  constructor() {
    super();
    this.boardModal = new BoardModal();
    this.profile = new ProfileManage();
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
}

module.exports = new Boards_generalPage();
