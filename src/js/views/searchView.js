class SearchView {
  _parentElement = document.querySelector('.search');

  getQuery() {
    const query = document.querySelector('.search__field').value;
    document.querySelector('.search__field').value = '';
    return query;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
