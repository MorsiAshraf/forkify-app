import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerPagination(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.gotopage;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1, there are other pages
    if (curPage === 1 && numPages > 1) return this._generateNextButton(curPage);

    // Last page
    if (curPage === numPages && numPages > 1)
      return this._generatePrevButton(curPage);

    // Other page
    if (curPage < numPages) {
      const markup = [
        this._generatePrevButton(curPage),
        this._generateNextButton(curPage),
      ].join('');

      return markup;
    }

    // Page 1, there are no other pages
    return '';
  }

  _generatePrevButton(curPage) {
    return `<button data-goToPage=${
      curPage - 1
    } class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>${curPage - 1}</span>
  </button>`;
  }

  _generateNextButton(curPage) {
    return `<button data-goToPage = ${
      curPage + 1
    } class="btn--inline pagination__btn--next">
    <span>${curPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`;
  }
}

export default new PaginationView();
