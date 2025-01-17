const pages = require("../../po/pagefactory");

describe("Boards management ", () => {
  before("Create a board", async () => {
    await pages.login.login();
    await pages.boards.boardModal.createBoard.click();
    await pages.boards.boardModal.boardTitle.setValue("new");
    await pages.boards.boardModal.btnSubmit.click();
  });
  it("I can see title <new> in the list of boards", async () => {
    const boardItem = await pages.boardInner.itemFromList("new").getText();
    console.log(`boardItem --> ${boardItem}`);
    assert.equal(boardItem, "new", "The board title should be 'new'");
  });

  before("Search for a board", async () => {
    await pages.search.open();
    await pages.search.boardSearch.searchInput.setValue("new");
    await pages.search.boardSearch.boardFromList.click();
  });
  it("I can see the title of the board <some>", async () => {
    const title = await pages.boardInner.pageTitle.getText();

    title.should.be.a("string").and.equal("new");
  });
  after("Board deletion", async () => {
    await pages.boardInner.deleteBoard("new");
  });
});
