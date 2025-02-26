function nextSlide() {
  let focus = $('.goober-slider li.focus');
  let nextFocus = focus.next().length ? focus.next() : $('.goober-slider li').first();
  nextFocus.addClass("focus");
  focus.removeClass("focus");
}

function prevSlide() {
  let focus = $('.goober-slider li.focus');
  let nextFocus = focus.prev().length ? focus.prev() : $('.goober-slider li').last();
  nextFocus.addClass("focus rightToLeft");
  focus.removeClass("focus");
  focus.removeClass("rightToLeft");
}
