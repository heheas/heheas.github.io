function nextSlide() {
  let focus = $('.goober-slider li.focus');
  let nextFocus = focus.next() ? focus.next() : $('goober-slider li:first-child');
  focus.next().addClass("focus");
  focus.removeClass("focus");
}
