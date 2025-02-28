function nextSlide() {
  let focus = $('.goober-slider li.focus');
  let prevPanel = focus.prev().length ? focus.prev() : $('.goober-slider li').last();
  let nextPanel = focus.next().length ? focus.next() : $('.goober-slider li').first();
  prevPanel.removeClass("left").addClass("right").css("display", "inline-block");
  focus.removeClass("focus").addClass("left")
  nextPanel.removeClass("right").addClass("focus").removeProp("display");
}

function prevSlide() {
  let focus = $('.goober-slider li.focus');
  let prevFocus = focus.prev().length ? focus.prev() : $('.goober-slider li').last();
  let nextFocus = focus.next().length ? focus.next() : $('.goober-slider li').first();
  prevFocus.removeClass("left").addClass("focus").css("display", "inline-block");
  focus.removeClass("focus").addClass("right");
  nextFocus.removeClass("right").addClass("left").css("display", "none");
}
