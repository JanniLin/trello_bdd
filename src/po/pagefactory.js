const LoginPage = require("./pages/login.page");
const BoardsPage = require("./pages/boards_general.page");
const SearchPage = require("./pages/search.page");
const BoardInnerPage = require("./pages/board_inner.page");
const SettingsProfile = require("./pages/settings_profile.page");
const SettingsWorkspase = require("./pages/settings_workspace.page");

const pages = {
  login: LoginPage,
  boards: BoardsPage,
  search: SearchPage,
  boardInner: BoardInnerPage,
  settingsProfile: SettingsProfile,
  settingsWorkspace: SettingsWorkspase,
};
module.exports = { ...pages };
