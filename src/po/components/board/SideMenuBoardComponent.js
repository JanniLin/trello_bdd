module.exports = class SideMenuBoardComponent {
  get iconSettingsSideMenu() {
    return $(
      'button[aria-label="Board actions menu"] span[data-testid="OverflowMenuHorizontalIcon"] ',
    );
  }
  get btnCloseBoard() {
    return $('button[aria-label="Close board"]');
  }
  get btnCloseConfirm() {
    return $('button[data-testid="popover-close-board-confirm"]');
  }
};
