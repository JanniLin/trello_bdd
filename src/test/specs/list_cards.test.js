const LoginPage = require("../../po/pages/login.page");
const BoardsPage = require("../../po/pages/boards_general.page");
const BoardInnerPage = require("./../../po/pages/board_inner.page");

describe("Cards management", () => {
  before("Create a list", async () => {
    await LoginPage.login();
    await browser.pause(3000);
    const boardItem = await BoardsPage.boardFromList("new");
    await boardItem.click();
    await BoardInnerPage.list.btnAddList.click();
    await BoardInnerPage.list.addListTitle.setValue("new list");
    await BoardInnerPage.list.btnSubmitAddList.click();
    await BoardInnerPage.list.btnCloseNextList.click();
  });
  it("I can see <new_list> on the <new> board page", async () => {
    const list = await BoardInnerPage.list.listEl.getText();

    expect(list).to.be.a("string").and.to.equal("new list");
  });

  before("Create a card", async () => {
    await BoardsPage.open();
    const boardItem = await BoardsPage.boardFromList("new");
    await boardItem.click();
    await browser.pause(3000);
    await BoardInnerPage.card.btnAddCard.click();
    await BoardInnerPage.card.cardTextArea.setValue("new card");
    await BoardInnerPage.card.btnSubmitAddCard.click();
    await BoardInnerPage.card.btnCloseNextCard.click();
  });
  it("I can see <new_card> card in the <new_list>", async () => {
    const card = await BoardInnerPage.card.card.getText();

    card.should.be.a("string").and.equal("new card");
  });
  it("Card filtering", async () => {
    await BoardsPage.open();
    const boardItem = await BoardsPage.boardFromList("new");
    await boardItem.click();
    await browser.pause(3000);
    await BoardInnerPage.card.btnAddCard.click();
    await BoardInnerPage.card.cardTextArea.setValue("second one");
    await BoardInnerPage.card.btnSubmitAddCard.click();
    await BoardInnerPage.card.btnCloseNextCard.click();
    await BoardInnerPage.card.btnFilterCard.click();
    await BoardInnerPage.card.filterSearchInput.setValue("second one");
  });
  it("I can see number of founded cards", async () => {
    const count = await BoardInnerPage.filterCount.getText();

    assert.equal(count, "1", "The number of found cards should be '1'");
  });

  after("delete list", async () => {
    await BoardInnerPage.list.listSettingsIcon.click();
    await browser.pause(2000);
    await BoardInnerPage.list.btnDeleteList.click();
  });
});
