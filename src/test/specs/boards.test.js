const LoginPage = require("../../po/login.page");
const BoardsPage = require('../../po/boards.page')

describe('Boards management ', ()=>{
  it('Create a board',async ()=>{
    await LoginPage.login();
    await BoardsPage.createNewBoard.click();
    await BoardsPage.boardTitle.setValue('some')
  })
})