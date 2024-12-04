const LoginPage = require("../../po/pages/login.page");
const BoardsPage = require("../../po/pages/boards_general.page");
const SearchPage = require("../../po/pages/search.page");
const BoardInnerPage = require("../../po/pages/board_inner.page");

describe("Boards management ", () => {
  before("Create a board", async () => {
    await LoginPage.login();
    await BoardsPage.createNewBoard.click();
    await BoardsPage.createBoardTitle.setValue("new");
    await BoardsPage.btnSubmitCreate.click();
  });
  it("I can see title <new> in the list of boards", async () => {
    const boardItem = await BoardInnerPage.itemFromList("new").getText();

    assert.equal(boardItem, "new", "The board title should be 'new'");
  });

  before("Search for a board", async () => {
    await SearchPage.open();
    await SearchPage.searchInput.setValue("new");
    await SearchPage.boardFromDDList.click();
  });
  it("I can see the title of the board <some>", async () => {
    const title = await BoardInnerPage.pageTitle.getText();

    title.should.be.a("string").and.equal("new");
  });
  after("Board deletion", async () => {
    await BoardInnerPage.itemFromList("new").moveTo();
    await BoardInnerPage.iconSettingsSideMenu.moveTo();
    await BoardInnerPage.iconSettingsSideMenu.click();
    await BoardInnerPage.btnCloseBoard.click();
    await BoardInnerPage.btnCloseConfirm.click();
  });
});
