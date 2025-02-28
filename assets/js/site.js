function nextSlide() {
  let focus = $('.goober-slider li.focus');
  let prevFocus = focus.prev().length ? focus.prev() : $('.goober-slider li').last();
  let nextFocus = focus.next().length ? focus.next() : $('.goober-slider li').first();
  focus.removeClass("focus").addClass("left").show();
  nextFocus.removeClass("right").addClass("focus").hide();
  prevFocus.removeClass("left").addClass("right").hide();
}

function prevSlide() {
  let focus = $('.goober-slider li.focus');
  let prevFocus = focus.prev().length ? focus.prev() : $('.goober-slider li').last();
  let nextFocus = focus.next().length ? focus.next() : $('.goober-slider li').first();
  focus.removeClass("focus").addClass("left").show();
  nextFocus.removeClass("left").addClass("right").hide();
  prevFocus.removeClass("right").addClass("focus").hide();
}
