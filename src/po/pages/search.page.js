const Page = require("./page");
const BoardSearch = require("../components/board/SearchDropDownComponent");

class SearchPage extends Page {
  constructor() {
    super();
    this.boardSearch = new BoardSearch();
  }
  open() {
    return super.open("search");
  }
}

module.exports = new SearchPage();
