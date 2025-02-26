function nextSlide() {
  let focus = $('.goober-slider li.focus');
  focus.next().addClass("focus");
  focus.removeClass("focus");
}
