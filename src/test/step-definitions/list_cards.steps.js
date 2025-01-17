const { When, Then } = require("@wdio/cucumber-framework");
const { After } = require("@wdio/cucumber-framework");
const pages = require("../../po/pagefactory");

When("I click on 'new' board title", async () => {
  const boardItem = await pages.boards.boardFromList("new");
  await boardItem.click();
});
When("I click 'add another list'", async () => {
  await pages.boardInner.list.btnAddList.click();
});
When("I insert 'new list' title", async () => {
  await pages.boardInner.list.addListTitle.clearValue();
  await pages.boardInner.list.addListTitle.setValue("new list");
});
When("I click button 'add list'", async () => {
  await pages.boardInner.list.btnSubmitAddList.click();
});
When("I click 'close' button for creating new list", async () => {
  await pages.boardInner.list.btnCancelListCreation.click();
});
Then("I can see 'new list' on the 'new' board page", async () => {
  const list = await pages.boardInner.list.listTitle.getText();

 await expect(list).to.be.a("string").and.to.equal("new list");
});

When("I click 'add a card' button", async () => {
  await pages.boardInner.card.btnAddCard.click();
});
When(
  /^I insert (new card|second one) in the title form$/,
  async (card_title) => {
    card_title === "new card"
      ? await pages.boardInner.card.cardTextArea.setValue("new card")
      : await pages.boardInner.card.cardTextArea.setValue("second one");
  },
);
When("I click 'add card' button", async () => {
  await pages.boardInner.card.btnSubmitAddCard.click();
});
When("I click 'close' button for creating new card", async () => {
  await pages.boardInner.card.btnCloseNextCard.click();
});
When("I can see 'new card' card in the 'new list'", async () => {
  const card = await pages.boardInner.card.card.getText();

 await card.should.be.a("string").and.equal("new card");
});

When("I click 'filter cards' icon", async () => {
  await pages.boardInner.card.btnFilterCard.click();
});
When("I enter 'second one' into keyword input", async () => {
  await pages.boardInner.card.filterSearchInput.setValue("second one");
});
Then("I can see number of founded cards", async () => {
  const count = await pages.boardInner.filterCount.getText();

 await assert.equal(count, "1", "The number of found cards should be '1'");
});

After("@delete_list", async () => {
  await pages.boardInner.list.listSettingsIcon.click();
  await browser.pause(2000);
  await pages.boardInner.list.btnDeleteList.click();
});
