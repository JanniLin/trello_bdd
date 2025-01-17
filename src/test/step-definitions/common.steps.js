const { Given } = require("@wdio/cucumber-framework");
const pages = require("../../po/pagefactory");

Given("I login with valid credentials", async () => {
  await pages.login.login();
});
Given(/^I open (search|boards) page$/, async (page) => {
  page === "search" ? await pages.search.open() : await pages.boards.open();
  await browser.pause(3000);
});
