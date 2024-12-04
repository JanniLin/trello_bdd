const LoginPage = require("../../po/pages/login.page");
const BoardsPage = require("../../po/pages/boards_general.page");
const BoardInnerPage = require("../../po/pages/board_inner.page");

describe("Cards management", () => {
  before("Create a list", async () => {
    await LoginPage.login();
    await browser.pause(3000);
    const boardItem = await BoardsPage.boardFromList("new");
    await boardItem.click();
    await BoardInnerPage.btnAddList.click();
    await BoardInnerPage.addListTitle.clearValue();
    await BoardInnerPage.addListTitle.setValue("new list");
    await BoardInnerPage.btnSubmitAddList.click();
    await BoardInnerPage.btnCloseNextList.click();
  });
  it("I can see <new_list> on the <new> board page", async () => {
    const list = await BoardInnerPage.listEl.getText();

    expect(list).to.be.a("string").and.to.equal("new list");
  });

  before("Create a card", async () => {
    await BoardsPage.open();
    const boardItem = await BoardsPage.boardFromList("new");
    await boardItem.click();
    await BoardInnerPage.btnAddCard.click();
    await BoardInnerPage.cardTextArea.setValue("new card");
    await BoardInnerPage.btnSubmitAddCard.click();
    await BoardInnerPage.btnCloseNextCard.click();
  });
  it("I can see <new_card> card in the <new_list>", async () => {
    const card = await BoardInnerPage.card.getText();

    card.should.be.a("string").and.equal("new card");
  });
  it("Card filtering", async () => {
    await BoardsPage.open();
    const boardItem = await BoardsPage.boardFromList("new");
    await boardItem.click();
    await BoardInnerPage.btnAddCard.click();
    await BoardInnerPage.cardTextArea.setValue("second one");
    await BoardInnerPage.btnSubmitAddCard.click();
    await BoardInnerPage.btnCloseNextCard.click();
    await BoardInnerPage.btnFilterCard.click();
    await BoardInnerPage.filterSearchInput.setValue("second one");
  });
  it("I can see number of founded cards", async () => {
    const count = await BoardInnerPage.filterCount.getText();

    assert.equal(count, "1", "The number of found cards should be '1'");
  });

  after("delete list", async () => {
    await BoardInnerPage.listSettingsIcon.click();
    await BoardInnerPage.btnDeleteList.click();
  });
});
