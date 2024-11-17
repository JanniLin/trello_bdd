import Page from "./page";

class Board_innerPage extends Page {
  itemFromList(ttl) {
    return $(`a[title='${ttl} (активна)']`);
  }
}
module.exports = new Board_innerPage();
