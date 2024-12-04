const LoginPage = require("../../po/pages/login.page");
const BoardsPage = require("../../po/pages/boards_general.page");
const SearchPage = require("../../po/pages/search.page");
const BoardInnerPage = require("../../po/pages/board_inner.page");

describe("Boards management ", () => {
  before("Create a board", async () => {
    await LoginPage.login();
    await BoardsPage.boardModal.createBoard.click();
    await BoardsPage.boardModal.boardTitle.setValue("new");
    await BoardsPage.boardModal.btnSubmit.click();
  });
  it("I can see title <new> in the list of boards", async () => {
    const boardItem = await BoardInnerPage.itemFromList("new").getText();

    assert.equal(boardItem, "new", "The board title should be 'new'");
  });

  before("Search for a board", async () => {
    await SearchPage.open();
    await SearchPage.boardSearch.searchInput.setValue("new");
    await SearchPage.boardSearch.boardFromList.click();
  });
  it("I can see the title of the board <some>", async () => {
    const title = await BoardInnerPage.pageTitle.getText();

    title.should.be.a("string").and.equal("new");
  });
  after("Board deletion", async () => {
    await BoardInnerPage.deleteBoard("new");
  });
});
