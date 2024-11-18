const LoginPage = require("../../po/login.page");
const BoardsPage = require("../../po/boards_general.page");
const BoardInnerPage = require("../../po/board_inner.page");

describe("Cards management", () => {
  before("Create a list", async () => {
    await LoginPage.login();
    const boardItem = await BoardsPage.boardFromList("new");
    await boardItem.click();
    await BoardInnerPage.btnAddList.click();
    await BoardInnerPage.addListTitle.setValue("new list");
    // const title = await BoardInnerPage.addListTitle.getText() ?
    //   '' : await BoardInnerPage.addListTitle.setValue('new list')
    await BoardInnerPage.btnSubmitAddList.click();
  });
  it("I can see <new_list> on the <new> board page ", async () => {
    const list = await BoardInnerPage.list.getText();
    await expect(list).toEqual("new list");

    // await BoardInnerPage.btnCloseNextList.click();
    // await BoardInnerPage.listSettingsIcon.click();
    // await BoardInnerPage.btnDeleteList.click();


  });
  after("delete list", async () => {
    await BoardInnerPage.btnCloseNextList.click();
    await BoardInnerPage.listSettingsIcon.click();
    await BoardInnerPage.btnDeleteList.click();
  });
  // it('Create a card',async ()=>{
  //   await LoginPage.login();
  //   const boardItem= await BoardsPage.boardFromList('new')
  //   await boardItem.click()
  //
  //
  // })
});
