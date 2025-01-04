const pages = require("../../po/pagefactory");

describe("Cards management", () => {
  before("Create a list", async () => {
    await pages.login.login();
    await browser.pause(3000);
    const boardItem = await pages.boards.boardFromList("new");
    await boardItem.click();
    await pages.boardInner.list.btnAddList.click();
    await pages.boardInner.list.addListTitle.clearValue();
    await pages.boardInner.list.addListTitle.setValue("new list");
    await pages.boardInner.list.btnSubmitAddList.click();
    await pages.boardInner.list.btnCancelListCreation.click();
  });
  it("I can see <new_list> on the <new> board page", async () => {
    const list = await pages.boardInner.list.listTitle.getText();

    expect(list).to.be.a("string").and.to.equal("new list");
  });

  before("Create a card", async () => {
    await pages.boards.open();
    const boardItem = await pages.boards.boardFromList("new");
    await boardItem.click();
    await browser.pause(3000);
    await pages.boardInner.card.btnAddCard.click();
    await pages.boardInner.card.cardTextArea.setValue("new card");
    await pages.boardInner.card.btnSubmitAddCard.click();
    await pages.boardInner.card.btnCloseNextCard.click();
  });
  it("I can see <new_card> card in the <new_list>", async () => {
    const card = await pages.boardInner.card.card.getText();

    card.should.be.a("string").and.equal("new card");
  });
  it("Card filtering", async () => {
    await pages.boards.open();
    const boardItem = await pages.boards.boardFromList("new");
    await boardItem.click();
    await browser.pause(3000);
    await pages.boardInner.card.btnAddCard.click();
    await pages.boardInner.card.cardTextArea.setValue("second one");
    await pages.boardInner.card.btnSubmitAddCard.click();
    await pages.boardInner.card.btnCloseNextCard.click();
    await pages.boardInner.card.btnFilterCard.click();
    await pages.boardInner.card.filterSearchInput.setValue("second one");
  });
  it("I can see number of founded cards", async () => {
    const count = await pages.boardInner.filterCount.getText();

    assert.equal(count, "1", "The number of found cards should be '1'");
  });

  after("delete list", async () => {
    await pages.boardInner.list.listSettingsIcon.click();
    await browser.pause(2000);
    await pages.boardInner.list.btnDeleteList.click();
  });
});
