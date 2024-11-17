const LoginPage = require("../../po/login.page");
const BoardsPage = require("../../po/boards_general.page");
const BoardInnerPage = require("../../po/board_inner.page");

describe("Boards management ", () => {
  before("Create a board", async () => {
    await LoginPage.login();
      await BoardsPage.createNewBoard.click();
      await BoardsPage.boardTitle.setValue("some1");
      await BoardsPage.btnSubmitCreate.click();
  });
  it("I can see title <some> in the list of boards", async () => {
    const boardItem = await BoardInnerPage.itemFromList('some1');
    await expect(boardItem).toBeExisting();
  });

  it("Search for a board", async () => {
    await BoardsPage.logo.click()
    await BoardsPage.searchIcon.click();
    await BoardsPage.searchInput.setValue("some1");




    // await BoardsPage.searchInput.setValue('some')
  });
  // it('I can see the title of the board <some>', async ()=>{
  //
  // })
});
