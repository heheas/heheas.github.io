function nextSlide() {
  let focus = $('.goober-slider li.focus');
  let nextFocus = focus.next() ? focus.next() : $('.goober-slider li').first();
  nextFocus.addClass("focus");
  focus.removeClass("focus");
}
