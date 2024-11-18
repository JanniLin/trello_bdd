// const LoginPage = require("../../po/login.page");
// const BoardsPage = require("../../po/boards_general.page");
// const BoardInnerPage = require("../../po/board_inner.page");
//
// describe("Boards management ", async () => {
//   before("Create a board", async () => {
//     await LoginPage.login();
//       await BoardsPage.createNewBoard.click();
//       await BoardsPage.createBoardTitle.setValue("new");
//       await BoardsPage.btnSubmitCreate.click();
//   });
//   it("I can see title <new> in the list of boards", async () => {
//     const boardItem = await BoardInnerPage.itemFromList('new');
//     await expect(boardItem).toBeExisting();
//   });
//
//   it("Search for a board", async () => {
//     await LoginPage.login();
//     //await BoardsPage.logo.click()
//     await BoardsPage.searchIcon.click();
//     await BoardsPage.searchInput.setValue("new");
//
//
//   });
//   it('I can see the title of the board <some>', async ()=>{
//
//   })
// });
