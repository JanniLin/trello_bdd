module.exports = class BoardModalCreateComponent {
  get boardTitle() {
    return $('input[data-testid="create-board-title-input"]');
  }
  get btnSubmit() {
    return $('button[data-testid="create-board-submit-button"]');
  }
  get createBoard() {
    return $('div[class="board-tile mod-add"]');
  }
};
