function nextSlide() {
  let focusPanel = $('.goober-slider li.focus');
  let prevPanel = focus.prev().length ? focus.prev() : $('.goober-slider li').last();
  prevPanel.hide();
  let nextPanel = focus.next().length ? focus.next() : $('.goober-slider li').first();
  nextPanel.show();
  prevPanel.removeClass("left").addClass("right");
  focusPanel.removeClass("focus").addClass("left")
  nextPanel.removeClass("right").addClass("focus");
}

function prevSlide() {
  let focusPanel = $('.goober-slider li.focus');
  let prevPanel = focus.prev().length ? focus.prev() : $('.goober-slider li').last();
  prevPanel.show();
  let nextPanel = focus.next().length ? focus.next() : $('.goober-slider li').first();
  nextPanel.hide();
  prevPanel.removeClass("left").addClass("focus");
  focusPanel.removeClass("focus").addClass("right");
  nextPanel.removeClass("right").addClass("left");
}
