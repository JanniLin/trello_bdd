const LoginPage = require('../../po/login.page')
const BoardsPage = require('../../po/boards.page')


describe('', ()=>{
  before('Login with valid credentials', async ()=>{
    await LoginPage.open();
    await LoginPage.btnLogin.click();
    await expect(LoginPage.modalWindow).toBeDisplayed();

    await LoginPage.inputUserName.setValue('yana.rusakova.epam@gmail.com');
    await LoginPage.btnLoginSubmit.click();

    await LoginPage.inputPassword.setValue('passworD123');
    await LoginPage.btnPasswordSubmit.click();

  })
  it('Boards page is opened', async ()=> {
    await expect(BoardsPage.logo).toBeDisplayed()
  });
})