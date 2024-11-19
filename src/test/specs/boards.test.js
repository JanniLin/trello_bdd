const LoginPage = require("../../po/login.page");
const BoardsPage = require("../../po/boards_general.page");
const SearchPage = require("../../po/search.page");
const BoardInnerPage = require("../../po/board_inner.page");
const {$} = require("@wdio/globals");

describe("Boards management ",  () => {
  before("Create a board", async () => {
   await LoginPage.login();
    await BoardsPage.createNewBoard.click();
    await BoardsPage.createBoardTitle.setValue("new");
    await BoardsPage.btnSubmitCreate.click();
    await BoardInnerPage.btnCloseNextList.click()

  });
  it("I can see title <new> in the list of boards", async () => {
    const boardItem = await BoardInnerPage.itemFromList("new");
    expect(boardItem).toBeExisting();
  });

  before("Search for a board", async () => {
    await SearchPage.open()
    await SearchPage.searchInput.setValue('new')
   await SearchPage.boardFromDDList.click()

  });
  it('I can see the title of the board <some>', async ()=>{
    const title = await BoardInnerPage.pageTitle.getText()
    await expect(title).toEqual('new')
  })
  // after("Board deletion", async () => {
  //   await BoardInnerPage.itemFromList("new").moveTo();
  //   const icon = await BoardInnerPage.iconSettingsSideMenu('new')
  //   await icon.click()
  //
  // });
});
