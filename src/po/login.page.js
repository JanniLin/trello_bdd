const { $ } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {


    //trello
    get btnLogin () {
        return $('a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]')
    }
    get modalWindow () {
        return $('#ProductHeading')
    }
    get inputUserName () {
        return $('#username')
    }
    get btnLoginSubmit(){
        return $('#login-submit')
    }
    get inputPassword () {
        return $('#password')
    }
    get btnPasswordSubmit () {
        return $('#login-submit')
    }
    //


    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }


    open () {
        return super.open('home');
    }
}

module.exports = new LoginPage();
