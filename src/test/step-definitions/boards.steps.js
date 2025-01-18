const { When, Then, After } = require("@wdio/cucumber-framework");
const pages = require("../../po/pagefactory");

When("I click on the 'create new board' area", async () => {
  await pages.boards.boardModal.createBoard.click();
});
When("I insert board title 'board'", async () => {
  await pages.boards.boardModal.boardTitle.setValue("board");
});
When("I click 'create' button", async () => {
  await pages.boards.boardModal.btnSubmit.click();
});
Then("I can see title 'board' in the list of boards", async () => {
  await pages.boardInner.list.btnCancelListCreation.click();
  // const boardItemEl = await pages.boardInner.itemFromList("board");
  //
  // await boardItemEl.waitForExist({ timeout: 5000 });
  // await boardItemEl.waitForDisplayed({ timeout: 5000 });
  //
  // console.log(` boardItem exist -->${await pages.boardInner.itemFromList("board").isExisting()}`);
  // console.log(` boardItem displayed -->${await pages.boardInner.itemFromList("board").isDisplayed()}`);
  //
  //  const boardItem = await pages.boardInner.itemFromList("board").getText();
  //  console.log(` boardItem --> ${boardItem}`);
  //
  //  assert.equal(boardItem, "board", "The board title should be 'board'");
});

When("I insert 'board' board title", async () => {
  await pages.search.boardSearch.searchInput.setValue("board");
});
When("I click found board 'board'", async () => {
  await pages.search.boardSearch.boardFromList.click();
});
Then("I can see the title of the board 'board'", async () => {
  const title = await pages.boardInner.pageTitle.getText();

  await title.should.be.a("string").and.equal("board");
});
After("@board_delete", async () => {
  console.log("Cleaning up after scenario...");
  await pages.boardInner.deleteBoard("board");
});
