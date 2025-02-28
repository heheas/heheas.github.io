function nextSlide() {
  let focusPanel = $('.goober-slider li.focus');
  let prevPanel = focusPanel.prev().length ? focusPanel.prev() : $('.goober-slider li').last();
  let nextPanel = focusPanel.next().length ? focusPanel.next() : $('.goober-slider li').first();
  prevPanel.removeClass("left").addClass("right").css("visibility", "hidden");
  focusPanel.removeClass("focus").addClass("left")
  nextPanel.removeClass("right").addClass("focus").css("visibility", "visible");
}

function prevSlide() {
  let focusPanel = $('.goober-slider li.focus');
  let prevPanel = focusPanel.prev().length ? focusPanel.prev() : $('.goober-slider li').last();
  let nextPanel = focusPanel.next().length ? focusPanel.next() : $('.goober-slider li').first();
  prevPanel.removeClass("left").addClass("focus").css("visibility", "visible");;
  focusPanel.removeClass("focus").addClass("right");
  nextPanel.removeClass("right").addClass("left").css("visibility", "hidden");;
}
