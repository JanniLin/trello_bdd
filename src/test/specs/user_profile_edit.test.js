const LoginPage = require("../../po/login.page");

describe("User profile management", () => {
  it("Edit user profile", async () => {
    await LoginPage.login();
  });
});
