module.exports = class List {
  itemFromList(ttl) {
    return $(`a[title="${ttl} (currently active)"]`);
  }
};
