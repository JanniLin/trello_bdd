module.exports = class SearchDropDown {
  get searchInput() {
    return $('input[data-testid="advanced-search-input"]');
  }

  get boardFromList() {
    return $(
      'div[class="U8nNpLQtodnSyN"] a[data-testid="advanced-search-board-result-item"]',
    );
  }
};
