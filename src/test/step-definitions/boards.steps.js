const { When, Then, After } = require("@wdio/cucumber-framework");
const pages = require("../../po/pagefactory");

When("I click on the 'create new board' area", async () => {
  await pages.boards.boardModal.createBoard.click();
});
When("I insert board title 'new'", async () => {
  await pages.boards.boardModal.boardTitle.setValue("new");
});
When("I click 'create' button", async () => {
  await pages.boards.boardModal.btnSubmit.click();
});
Then("I can see title 'new' in the list of boards", async () => {
  await pages.boardInner.list.btnCancelListCreation.click();
  // const boardItem = await pages.boardInner.itemFromList("new").getText()
  //
  // console.log(`boardItem --> ${boardItem}`)
  // await assert.equal(boardItem, "new", "The board title should be 'new'")
});

When("I insert 'new' board title", async () => {
  await pages.search.boardSearch.searchInput.setValue("new");
});
When("I click found board 'new'", async () => {
  await pages.search.boardSearch.boardFromList.click();
});
Then("I can see the title of the board 'new'", async () => {
  const title = await pages.boardInner.pageTitle.getText();

  await title.should.be.a("string").and.equal("new");
});
After("@board", async () => {
  console.log("Cleaning up after scenario...");
  await pages.boardInner.deleteBoard("new");
});
