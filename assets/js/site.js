function nextSlide() {
  let focus = $('.goober-slider li.focus');
  let nextFocus = focus.next() ? focus.next() : $('.goober-slider li').first();
  focus.next().addClass("focus");
  focus.removeClass("focus");
}
