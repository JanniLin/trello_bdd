module.exports = class LoginModalComponent {
  get userName() {
    return $("#username");
  }
  get btnSubmit() {
    return $("#login-submit");
  }
  get password() {
    return $("#password");
  }
};
