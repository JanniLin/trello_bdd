const Page = require("./page");

class SearchPage extends Page {
  open() {
    return super.open("search");
  }
  get searchInput() {
    return $('input[data-testid="advanced-search-input"]');
  }
  get boardFromDDList() {
    return $(
      'div[class="U8nNpLQtodnSyN"] a[data-testid="advanced-search-board-result-item"]',
    );
  }
}

module.exports = new SearchPage();
