function nextSlide() {
  let focus = $('.goober-slider li.focus');
  let prevFocus = focus.prev().length ? focus.prev() : $('.goober-slider li').last();
  let nextFocus = focus.next().length ? focus.next() : $('.goober-slider li').first();
  focus.removeClass("focus").addClass("left");
  nextFocus.removeClass("right").addClass("focus");
  prevFocus.removeClass("left").addClass("right");
}

function prevSlide() {
  let focus = $('.goober-slider li.focus');
  let prevFocus = focus.prev().length ? focus.prev() : $('.goober-slider li').last();
  let nextFocus = focus.next().length ? focus.next() : $('.goober-slider li').first();
  focus.removeClass("focus").addClass("left");
  nextFocus.removeClass("left").addClass("right");
  prevFocus.removeClass("right").addClass("focus");
}
